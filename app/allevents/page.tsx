'use client'
import React from 'react';

// Header Component
const Header = () => {
  return (
    <div className="text-center mb-12 relative">
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <h1 className="text-4xl font-bold text-orange-500 mb-4">ALL EVENTS</h1>
      <p className="text-gray-300 max-w-2xl mx-auto px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-2">{date}</p>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Events Section Component
const EventsSection = ({ title, events = [] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

// Photo Grid Component
const PhotoGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <div 
          key={index}
          className={`rounded-lg overflow-hidden ${
            index === 2 || index === 9 ? 'md:col-span-2' : ''
          }`}
        >
          <img
            src={photo}
            alt={`Gallery photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

// Main Events Page Component
const EventsPage = () => {
  const pastEvents = [
    {
      title: "Event Name",
      date: "15 March 2024",
      description: "Short description of the event goes here",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Event Name",
      date: "10 March 2024",
      description: "Short description of the event goes here",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Event Name",
      date: "5 March 2024",
      description: "Short description of the event goes here",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Event Name",
      date: "1 March 2024",
      description: "Short description of the event goes here",
      image: "/api/placeholder/400/300"
    }
  ];

  const photos = [
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/800/400",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/800/400",
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-center">UPCOMING EVENTS</h2>
          {/* Add upcoming events content here */}
        </div>

        <EventsSection title="PAST EVENTS" events={pastEvents} />

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">CELESTIA PHOTOS</h2>
          <PhotoGrid photos={photos} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;