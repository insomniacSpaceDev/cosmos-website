'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Main Video Player Component
const VideoPlayer = () => {
  return (
    <div className="w-full aspect-video bg-gray-200 rounded-lg mb-8">
      {/* Video player placeholder */}
      <div className="w-full h-full flex items-center justify-center">
        <span className="text-gray-500">Video Player</span>
      </div>
    </div>
  );
};

// Carousel Item Component
const CarouselItem = ({ title, description }) => {
  return (
    <div className="w-64 mx-2">
      <div className="aspect-video bg-gray-200 rounded-lg mb-2">
        {/* Thumbnail placeholder */}
      </div>
      <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-xs text-gray-600 mb-2">{description}</p>
      <button className="bg-gray-800 text-white text-xs px-4 py-2 rounded hover:bg-gray-700 transition-colors">
        WATCH ONLINE
      </button>
    </div>
  );
};

// Carousel Component
const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= items.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full">
      <h2 className="text-lg font-bold mb-4">BEST OF GROUND STATION LIVE FEED</h2>
      <div className="relative flex items-center">
        <button 
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 272}px)` }}
          >
            {items.map((item, index) => (
              <CarouselItem key={index} {...item} />
            ))}
          </div>
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

// Main Component
const GSLiveFeed = () => {
  const carouselItems = [
    {
      title: "Live Broadcast",
      description: "Watch our latest live broadcasts and stay updated with current events.",
    },
    {
      title: "News Roundup",
      description: "Get the latest news updates and breaking stories from around the world.",
    },
    {
      title: "Weather & Services",
      description: "Stay informed about weather conditions and our latest service updates.",
    },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-red-600 mb-6">GROUND STATION LIVE FEED</h1>
      <VideoPlayer />
      <Carousel items={carouselItems} />
    </div>
  );
};

export default GSLiveFeed;