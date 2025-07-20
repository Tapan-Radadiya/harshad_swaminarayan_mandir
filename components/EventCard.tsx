"use client";
import Image from 'next/image';
import Link from 'next/link';
import { format } from "date-fns";

interface EventCardProps {
  id: string;
  title: string;
  event_date: string;
  description: string;
  image?: {
    url: string,
    alternativeText: string
  };
  slug: string
}

const EventCard = ({ id, title, event_date, description, image, slug }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <div className="h-48 w-full relative overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_BASE}${image.url}`}
            alt={image.alternativeText || title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-5">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{format(new Date(event_date), 'dd-mm-yyyy HH:mm')}</span>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

        <Link href={`/events/${slug}`} className="inline-block bg-primary text-on-primary px-4 py-2 rounded hover:bg-primary-dark transition">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;