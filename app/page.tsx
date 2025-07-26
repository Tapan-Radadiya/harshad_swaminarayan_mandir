'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import EventCard from '../components/EventCard';
import { useLanguage } from './context/LanguageContext';
import axiosInstance from '@/assets/config/axios.config';
import { carouselQS, coverImageQS } from '@/assets/queryString/carousel.qs';
import { getAllEventDataQS } from '@/assets/queryString/event.qs';


export default function Home() {
  const { t, locale } = useLanguage();
  const [events, setEvents] = useState<any[]>([])
  const [carouselImages, setcarouselImages] = useState<any[]>([])
  const [coverImage, setCoverImage] = useState<{ src: string, alt: '' }>({ src: '', alt: '' })

  useEffect(() => {
    // In a real app, fetch this data from an API
  }, []);


  useEffect(() => {
    fetchCoverImage()
    fetchCarouselData()
    fetchEventData()
  }, [])


  const fetchCarouselData = useCallback(async () => {
    const data = await axiosInstance.get(`/image-managers?${carouselQS()}`)
    const formatedData = formatStrapiResponse(data.data.data)
    setcarouselImages(formatedData)
  }, [])

  const fetchCoverImage = useCallback(async () => {
    const data = await axiosInstance.get(`/image-managers?${coverImageQS()}`)
    const formatedData: any[] = formatStrapiResponse(data.data.data)
    setCoverImage(formatedData.length > 0 ? formatedData[0] : [])
  }, [])

  const fetchEventData = useCallback(async () => {
    const data = await axiosInstance.get(`mandir-events?${getAllEventDataQS(locale)}`)
    const eventData = data.data.data
    setEvents(eventData)
  }, [])

  const formatStrapiResponse = (carouselImageData: any[]) => {
    if (carouselImageData.length !== 0) {
      const formatedData = carouselImageData.map((ele) => {
        return {
          src: `${ele.images.url}`,
          alt: 'carousel Image'
        }
      })
      return formatedData
    } else {
      return []
    }
  }
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[800px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            className="object-fit brightness-75"
            priority
          />
        </div>
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">{t('home.title')}</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl drop-shadow-md px-2">{t('home.subtitle')}</p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-8 sm:py-12 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">{t('home.welcome')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {t('home.description')}
            </p>
            <Link href="/about" className="inline-block bg-primary text-on-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-primary-dark transition text-sm sm:text-base">
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">{t('home.gallery')}</h2>
          <ImageCarousel images={carouselImages} />
          <div className="text-center mt-4 sm:mt-6">
            <Link href="/gallery" className="inline-block text-primary font-medium hover:underline text-sm sm:text-base">
              {t('home.viewGallery')} →
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('home.events')}</h2>
          {/* 
          {events.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.slice(0, 3).map((event) => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Link href="/events" className="inline-block bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition">
                  {t('home.viewEvents')}
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-600">{t('home.noEvents')}</p>
          )} */}
        </div>
      </section>

      <Footer />
    </>
  );
}