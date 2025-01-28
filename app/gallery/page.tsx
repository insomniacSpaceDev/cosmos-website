'use client'
import React, { useState } from 'react';

// Gallery Header Component
const GalleryHeader = () => {
  return (
    <div className="text-center mb-12 relative">
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <h1 className="text-4xl font-bold text-orange-500 mb-4">GALLERY</h1>
      <p className="text-gray-300 max-w-2xl mx-auto px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>
  );
};

// Gallery Navigation Component
const GalleryNav = ({ activeFilter, onFilterChange }) => {
  const filters = ['All Images', 'BW Activities', 'Color Work'];
  
  return (
    <div className="flex gap-6 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`text-sm ${
            activeFilter === filter
              ? 'text-orange-500'
              : 'text-gray-400 hover:text-orange-500'
          } transition-colors`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

// Image Card Component
const ImageCard = ({ src, alt, className }) => {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

// Main Gallery Grid Component
const GalleryGrid = () => {
  const images = [
    { src: "/api/placeholder/400/300", alt: "Mountain lake view", span: "col-span-1" },
    { src: "/api/placeholder/400/500", alt: "Road through trees", span: "col-span-1" },
    { src: "/api/placeholder/800/400", alt: "Snowy mountains", span: "col-span-2" },
    { src: "/api/placeholder/400/300", alt: "Mountain lake view 2", span: "col-span-1" },
    { src: "/api/placeholder/400/600", alt: "Tree-lined road", span: "col-span-1" },
    { src: "/api/placeholder/400/300", alt: "Lake view 3", span: "col-span-1" },
    { src: "/api/placeholder/400/300", alt: "Mountain view 4", span: "col-span-1" },
    { src: "/api/placeholder/400/300", alt: "Lake scene 5", span: "col-span-1" },
    { src: "/api/placeholder/400/300", alt: "Mountain lake 6", span: "col-span-1" },
    { src: "/api/placeholder/800/400", alt: "Snow-capped peaks", span: "col-span-2" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.span}
        />
      ))}
    </div>
  );
};

// Main Gallery Component
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All Images');

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <GalleryHeader />
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl text-white font-semibold">From Our Gallery</h2>
            <GalleryNav
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
};

export default Gallery;