'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import EventCard from '../components/EventCard';
import { useLanguage } from './context/LanguageContext';
import axiosInstance from '@/assets/config/axios.config';

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
  const [carouselImages, setcarouselImages] = useState<any[]>([])
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


  useEffect(() => {
    fetchCarouselData()
  }, [])


  const fetchCarouselData = async () => {
    const data = await axiosInstance.get("/image-managers?filters[image_type][$eq]=carousel&filters[is_active][$eq]=true&sort=priority:asc&fields[0]=id&fields[1]=priority&populate[images][fields][0]=url&populate[images][fields][1]=name&populate[gallery_group][fields][0]=group_key")
    const formatedData = formatStrapiResponse(data.data.data)
    setcarouselImages(formatedData)
  }

  const formatStrapiResponse = (carouselImageData: any[]) => {
    if (carouselImageData.length !== 0) {
      const formatedData = carouselImageData.map((ele) => {
        return {
          src: `${process.env.NEXT_PUBLIC_STRAPI_BASE}${ele.images.url}`,
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
      <div className="relative h-[790px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="http://localhost:1337/uploads/102966478_111193160622382_7960235014233260032_n_05f9c9c820.jpg"
            alt="Harshad Swaminarayan Mandir"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">{t('home.title')}</h1>
          <p className="text-xl md:text-2xl max-w-2xl drop-shadow-md">{t('home.subtitle')}</p>
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