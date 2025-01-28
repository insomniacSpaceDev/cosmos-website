'use client'
import React from 'react';

// Header Component
const Header = () => {
  return (
    <div className="text-center mb-12 relative py-12 bg-black/80">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">EVENTS</h1>
      <p className="text-gray-300 max-w-2xl mx-auto px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src="/api/placeholder/400/300"
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="text-orange-500 text-sm hover:text-orange-600">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

// Footer Links Component
const FooterSection = ({ title, links }) => {
  return (
    <div className="mb-8">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-gray-400 hover:text-orange-500 text-sm">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Newsletter Component
const Newsletter = () => {
  return (
    <div className="mb-8">
      <h3 className="text-white font-semibold mb-4">Newsletter</h3>
      <p className="text-gray-400 text-sm mb-4">We send updates in every week</p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="bg-gray-800 text-white px-4 py-2 rounded flex-grow"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          OK
        </button>
      </div>
    </div>
  );
};

// Main Events Page Component
const EventsPage = () => {
  const pastEvents = [
    {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Event Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const quickLinks = [
    { text: "Features", href: "#" },
    { text: "Pricing", href: "#" },
    { text: "Download", href: "#" },
  ];

  const contactInfo = [
    { text: "123 Street Name Property", href: "#" },
    { text: "New York City", href: "#" },
    { text: "contact123@gmail.com", href: "mailto:contact123@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">UPCOMING EVENTS</h2>
          {/* Add upcoming events content here */}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8">PAST EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pastEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-800">
          <FooterSection title="Get in touch" links={contactInfo} />
          <FooterSection title="Quick Links" links={quickLinks} />
          <Newsletter />
        </footer>
      </main>
    </div>
  );
};

export default EventsPage;