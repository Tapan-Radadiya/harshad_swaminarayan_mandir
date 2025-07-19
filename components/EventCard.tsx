"use client";

import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
}

const EventCard = ({ id, title, date, time, description, image }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="h-48 w-full bg-primary-light flex items-center justify-center">
          <span className="text-primary font-medium">Event Image Placeholder</span>
        </div>
      )}
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{date} • {time}</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        
        <Link href={`/events/${id}`} className="inline-block bg-primary text-on-primary px-4 py-2 rounded hover:bg-primary-dark transition">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;