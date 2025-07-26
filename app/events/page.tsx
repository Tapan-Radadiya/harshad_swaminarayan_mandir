'use client';

import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';
import axiosInstance from '@/assets/config/axios.config';
import { getAllEventDataQS } from '@/assets/queryString/event.qs';
import { useLanguage } from '../context/LanguageContext';

// Mock data - in a real app, this would come from an API

export default function Events() {
  const [filter, setFilter] = useState('all');
  const [events, setEvents] = useState<any[]>([])
  const [filteredEvents, setFilteredEvents] = useState<any[]>([])
  const { t, locale } = useLanguage();

  useEffect(() => {
    fetchData()
  }, [locale])

  const fetchData = async () => {
    const data = await axiosInstance.get(`mandir-events?${getAllEventDataQS(locale)}`)
    const eventData = data.data.data
    setEvents(eventData)
    setFilteredEvents(eventData)
  }
  useEffect(() => {
    setFilterData()
  }, [filter])

  const setFilterData = async () => {
    if (filter != 'all') {
      const filterdData = events.filter((ele) => ele.event_type === filter)
      setFilteredEvents(filterdData)
    } else {
      setFilteredEvents(events)
    }
  }
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(events.map(event => event.event_type)))];
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary text-on-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Temple Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for various religious ceremonies, cultural celebrations, and community gatherings
          </p>
        </div>
      </div>

      {/* Events Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full ${filter === category
                  ? 'bg-primary text-on-primary'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                return (
                  <EventCard key={event.id} image={event.images[0]} {...event} />
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}