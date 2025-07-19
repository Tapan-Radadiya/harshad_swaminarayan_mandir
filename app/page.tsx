'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import EventCard from '../components/EventCard';
import { useLanguage } from './context/LanguageContext';

// Mock data - in a real app, this would come from an API
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
}

export default function Home() {
  const { t } = useLanguage();
  const [events, setEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    // In a real app, fetch this data from an API
    const mockEvents: Event[] = [
      {
        id: '1',
        title: 'Diwali Celebration',
        date: 'November 12, 2023',
        time: '6:00 PM - 10:00 PM',
        description: 'Join us for a special Diwali celebration with prayers, lighting of diyas, cultural performances, and prasad.',
        image: '/images/events/diwali.jpg',
      },
      {
        id: '2',
        title: 'Weekly Bhajan Session',
        date: 'Every Sunday',
        time: '10:00 AM - 12:00 PM',
        description: 'Weekly devotional singing session led by our temple musicians.',
        image: '/images/events/bhajan.jpg',
      },
      {
        id: '3',
        title: 'Janmashtami Celebration',
        date: 'August 19, 2023',
        time: '7:00 PM - 12:00 AM',
        description: 'Celebrate the birth of Lord Krishna with prayers, bhajans, and midnight aarti.',
        image: '/images/events/janmashtami.jpg',
      },
    ];
    
    setEvents(mockEvents);
  }, []);
  
  // Placeholder carousel items
  const carouselImages = [
    { src: '/next.svg', alt: 'Temple Front View' },
    { src: '/vercel.svg', alt: 'Temple Interior' },
    { src: '/next.svg', alt: 'Temple Celebration' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-primary">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl">{t('home.subtitle')}</p>
        </div>
      </div>
      
      {/* Welcome Section */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('home.welcome')}</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              {t('home.description')}
            </p>
            <Link href="/about" className="inline-block bg-primary text-on-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              {t('home.learnMore')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Image Carousel Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('home.gallery')}</h2>
          <ImageCarousel images={carouselImages} />
          <div className="text-center mt-6">
            <Link href="/gallery" className="inline-block text-primary font-medium hover:underline">
              {t('home.viewGallery')} →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('home.events')}</h2>
          
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
          )}
        </div>
      </section>
      
      <Footer />
    </>
  );
}