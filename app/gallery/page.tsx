"use client";
import React, { useState } from "react";
import Image from "next/image";

// Gallery Header Component
const GalleryHeader = () => {
    return (
        <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-black/50 -z-10" />
            <h1 className="text-4xl font-bold text-orange-500 mb-4">GALLERY</h1>
            <p className="text-gray-300 max-w-2xl mx-auto px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    );
};

// Gallery Navigation Component
const GalleryNav = ({ activeFilter, onFilterChange }) => {
    const filters = ["All Images", "BW Activities", "Color Work"];

    return (
        <div className="flex gap-6 mb-8">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`text-sm ${
                        activeFilter === filter
                            ? "text-orange-500"
                            : "text-gray-400 hover:text-orange-500"
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
            <Image
                height={500}
                width={500}
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
        { src: "/observatory/image1.jpg", alt: "Eagle Nebula", span: "col-span-1" },
        { src: "/observatory/image2.jpg", alt: "Road through trees", span: "col-span-1" },
        { src: "/observatory/image3.jpg", alt: "Mountain lake view 2", span: "col-span-1" },
        { src: "/observatory/image4.jpg", alt: "Tree-lined road", span: "col-span-1" },
        { src: "/observatory/image5.jpg", alt: "Lake view 3", span: "col-span-1" },
        { src: "/observatory/image6.jpg", alt: "Snowy mountains", span: "col-span-1" },
        { src: "/observatory/image7.jpg", alt: "Mountain view 4", span: "col-span-1" },
        { src: "/observatory/image8.jpg", alt: "Lake scene 5", span: "col-span-1" },
        { src: "/observatory/image9.jpg", alt: "Mountain lake 6", span: "col-span-1" },
        { src: "/observatory/image10.jpg", alt: "Snow-capped peaks", span: "col-span-1" },
        { src: "/observatory/image11.jpg", alt: "Snow-capped peaks", span: "col-span-1" },
    ];

    return (
        <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
                <ImageCard key={index} src={image.src} alt={image.alt} className={image.span} />
            ))}
        </div>
    );
};

// Main Gallery Component
const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("All Images");

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-7xl mx-auto">
                <GalleryHeader />
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl text-white font-semibold">
                            Observatory Processed Images
                        </h2>
                        <GalleryNav activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                    </div>
                    <GalleryGrid />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
