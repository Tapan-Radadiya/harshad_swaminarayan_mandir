"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ImageType {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

interface EventImageGridProps {
  images: ImageType[];
}

const EventImageGrid = ({ images }: EventImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  return (
    <div className="mt-6 sm:mt-8 select-none">
      <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-4">Event Gallery</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => {
              setShowModal(true);
              setSelectedImage(image)
            }}
          >
            <Image
              src={`${image.url}`}
              alt={image.alternativeText || 'Event image'}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {
        showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" >
            <div className="relative w-full max-w-4xl" ref={modalRef}>
              <button
                onClick={() => setShowModal(false)}
                className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 z-10"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {
                selectedImage && (
                  <div className="h-[60vh] sm:h-[70vh] relative bg-black rounded-lg overflow-hidden">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE}${selectedImage.url}`}
                      alt={selectedImage.alternativeText || 'Event image'}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                )
              }
            </div>
          </div>
        )
      }
    </div >
  );
};

export default EventImageGrid;