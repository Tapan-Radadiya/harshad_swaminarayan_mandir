'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axiosInstance from '@/assets/config/axios.config';
import { galleryAllimagesQS, galleryGroupQS } from '@/assets/queryString/galleryGroup.qs';
import ImageCarousel from '@/components/ImageCarousel';

// Mock data - in a real app, this would come from an API
interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [modalImages, setModalImages] = useState<Array<{ src: string, alt: string }>>([])

  useEffect(() => {
    fetchImageGalleryData()
  }, [])

  const fetchImageGalleryData = async () => {
    const data = await axiosInstance.get(`gallery-groups?${galleryGroupQS()}`)
    const formatedData = formateGalleryData(data.data.data)
    setGalleryImages(formatedData ?? [])
  }

  const formateGalleryData = (galleryData: any[]) => {
    return galleryData.map((item: any) => {
      return {
        id: item.id,
        src: `${process.env.NEXT_PUBLIC_STRAPI_BASE}${item.thumbnail.url}`,
        title: item.title,
        category: item.group_key,
      }
    })
  }

  const fetchEventImages = async (imageData: GalleryImage) => {
    const fullImageData = await axiosInstance.get(`gallery-groups?${galleryAllimagesQS(imageData.category)}`)
    const formatedimageData = fullImageData.data.data.map((ele: { src: string, alt: string }) => ({ src: `${process.env.NEXT_PUBLIC_STRAPI_BASE}${ele.src}`, alt: ele.alt }))
    setModalImages(formatedimageData)
    setSelectedImage(imageData)
  }
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
          {/* <div className="mb-8 flex flex-wrap justify-center gap-2">
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
          </div> */}

          {/* Image Grid */}
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => {
                return (
                  <div
                    key={image.id}
                    className="h-64 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow relative"
                    onClick={() => fetchEventImages(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-center">
                      <span className="font-medium">{image.title}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {modalImages.length > 0 && selectedImage && (
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

            <div className="h-[70vh] relative backdrop-blur-3xl">
              <ImageCarousel images={modalImages} />
            </div>

            <div className="bg-white p-4 text-center">
              <p className="text-lg font-medium">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}