'use client'
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useCallback, useEffect, useState } from 'react';
import axiosInstance from '@/assets/config/axios.config';
import { getEventDetailsQS } from '@/assets/queryString/event.qs';
import { useLanguage } from '@/app/context/LanguageContext';
import { format } from "date-fns";
import EventImageGrid from '@/components/EventImageGrid';

export default function EventDetail() {

  const params = useParams<{ slug: string }>()
  const [event, setEvent] = useState<any>({})
  const { t, locale } = useLanguage();

  useEffect(() => {
    fetchEventDetails()
  }, [locale])

  const fetchEventDetails = useCallback(async () => {
    const data = await axiosInstance.get(`mandir-events?${getEventDetailsQS(params.slug, locale)}`)
    setEvent(data.data.data[0])
  }, [])
  return (
    <>
      <Navbar />
      {/* Event Header */}
      <div className="h-[200px] w-full bg-primary-dark flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className="flex items-center text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event?.event_date && format(new Date(event.event_date), 'dd-mm-yyyy hh:mm')}</span>
          </div>
        </div>
      </div >

      {/* Event Details */}
      <section className="py-12" >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Event Type</p>
                    <p className="font-medium capitalize">{event.event_type}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Organizer</p>
                    <p className="font-medium">{`Harshad Swaminarayan Mandir`}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
                <div className="prose max-w-none text-gray-700">
                  <p key={`Event Description`} className="mb-4">{event.description}</p>
                </div>
              </div>

              {/* Event Images */}
              {event.images && event.images.length > 0 && (
                <div className="mt-8">
                  <EventImageGrid images={event.images} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  );
}