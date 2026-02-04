'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-400 font-light">Nenhuma imagem disponível.</p>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${projectTitle} - Imagem ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentImage]}
              alt={`${projectTitle} - Imagem ${currentImage + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
