'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import EventCard from '../../components/EventCard';

// Mock data - in a real app, this would come from an API
interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
  category: string;
}

export default function Events() {
  const [filter, setFilter] = useState('all');
  
  // In a real app, fetch this data from an API
  const events: Event[] = [
    {
      id: '1',
      title: 'Diwali Celebration',
      date: 'November 12, 2023',
      time: '6:00 PM - 10:00 PM',
      description: 'Join us for a special Diwali celebration with prayers, lighting of diyas, cultural performances, and prasad.',
      image: '/images/events/diwali.jpg',
      category: 'festival',
    },
    {
      id: '2',
      title: 'Weekly Bhajan Session',
      date: 'Every Sunday',
      time: '10:00 AM - 12:00 PM',
      description: 'Weekly devotional singing session led by our temple musicians.',
      image: '/images/events/bhajan.jpg',
      category: 'regular',
    },
    {
      id: '3',
      title: 'Janmashtami Celebration',
      date: 'August 19, 2023',
      time: '7:00 PM - 12:00 AM',
      description: 'Celebrate the birth of Lord Krishna with prayers, bhajans, and midnight aarti.',
      image: '/images/events/janmashtami.jpg',
      category: 'festival',
    },
    {
      id: '4',
      title: 'Yoga & Meditation Workshop',
      date: 'July 15, 2023',
      time: '9:00 AM - 11:00 AM',
      description: 'Learn yoga and meditation techniques from experienced practitioners.',
      image: '/images/events/yoga.jpg',
      category: 'workshop',
    },
    {
      id: '5',
      title: 'Monthly Satsang',
      date: 'First Saturday of every month',
      time: '5:00 PM - 7:00 PM',
      description: 'Monthly spiritual discourse followed by Q&A session with our head priest.',
      image: '/images/events/satsang.jpg',
      category: 'regular',
    },
    {
      id: '6',
      title: 'Navratri Garba Night',
      date: 'October 15-23, 2023',
      time: '7:00 PM - 11:00 PM',
      description: 'Nine nights of traditional Garba and Dandiya dancing to celebrate Navratri.',
      image: '/images/events/navratri.jpg',
      category: 'festival',
    },
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category)))];
  
  // Filter events based on selected category
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

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
                className={`px-4 py-2 rounded-full ${
                  filter === category
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
              {filteredEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
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