'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Mock data - in a real app, this would come from an API
interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // In a real app, fetch this data from an API
  const images: GalleryImage[] = [
    {
      id: '1',
      src: '/images/gallery/temple1.jpg',
      alt: 'Temple Front View',
      category: 'architecture',
    },
    {
      id: '2',
      src: '/images/gallery/deity1.jpg',
      alt: 'Main Shrine',
      category: 'deities',
    },
    {
      id: '3',
      src: '/images/gallery/celebration1.jpg',
      alt: 'Diwali Celebration',
      category: 'celebrations',
    },
    {
      id: '4',
      src: '/images/gallery/temple2.jpg',
      alt: 'Temple Interior',
      category: 'architecture',
    },
    {
      id: '5',
      src: '/images/gallery/deity2.jpg',
      alt: 'Lord Swaminarayan Idol',
      category: 'deities',
    },
    {
      id: '6',
      src: '/images/gallery/celebration2.jpg',
      alt: 'Holi Festival',
      category: 'celebrations',
    },
    {
      id: '7',
      src: '/images/gallery/temple3.jpg',
      alt: 'Temple at Night',
      category: 'architecture',
    },
    {
      id: '8',
      src: '/images/gallery/deity3.jpg',
      alt: 'Radha Krishna Shrine',
      category: 'deities',
    },
    {
      id: '9',
      src: '/images/gallery/celebration3.jpg',
      alt: 'Navratri Garba',
      category: 'celebrations',
    },
    {
      id: '10',
      src: '/images/gallery/temple4.jpg',
      alt: 'Temple Garden',
      category: 'architecture',
    },
    {
      id: '11',
      src: '/images/gallery/deity4.jpg',
      alt: 'Lord Ganesha Idol',
      category: 'deities',
    },
    {
      id: '12',
      src: '/images/gallery/celebration4.jpg',
      alt: 'Janmashtami Celebration',
      category: 'celebrations',
    },
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(images.map(img => img.category)))];
  
  // Filter images based on selected category
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-primary text-on-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Temple Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore beautiful images of our temple, deities, and celebrations
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
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
          
          {/* Image Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image) => (
                <div 
                  key={image.id} 
                  className="h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-primary-light flex items-center justify-center"
                  onClick={() => setSelectedImage(image)}
                >
                  <span className="text-primary font-medium">{image.alt}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="h-[70vh] bg-primary-light flex items-center justify-center">
              <span className="text-primary text-xl font-medium">{selectedImage.alt}</span>
            </div>
            
            <div className="bg-white p-4 text-center">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}