"use client";

import { useState, useEffect } from "react";

const eventsData = [
  "/events/event1.jpg",
  "/events/event2.jpg",
  "/events/event3.jpg",
  "/events/event4.jpg",
  "/events/event5.jpg",
  "/events/event6.jpg",
  "/events/event7.jpg",
  "/events/event8.jpg",
  "/events/event9.jpg",
  "/events/event10.jpg",
  "/events/event11.jpg",
  "/events/event12.jpg",
  "/events/event13.jpg",
  "/events/event14.jpg",
  "/events/event15.jpg",
  "/events/event16.jpg",
  "/events/event17.jpg",
  "/events/event18.jpg",
  "/events/event19.jpg",
  "/events/event20.jpg",
];

const EventsPage = () => {
  const [visibleCount, setVisibleCount] = useState(12); // Initially show 12 images
  const [loadedImages, setLoadedImages] = useState({}); // Track loaded images

  useEffect(() => {
    // Preload images and check if they exist
    eventsData.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => ({ ...prev, [src]: true }));
      img.onerror = () => setLoadedImages((prev) => ({ ...prev, [src]: false }));
    });
  }, []);

  const loadMoreImages = () => {
    setVisibleCount((prevCount) => prevCount + 8); // Load 8 more images on click
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-52">
      <h2 className="text-4xl font-bold text-center mb-8">Our Events</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {eventsData.slice(0, visibleCount).map((image, index) => (
          <div
            key={index}
            className="w-full h-56 flex items-center justify-center bg-gray-200 rounded-lg shadow-md"
          >
            {loadedImages[image] ? (
              <img src={image} alt={`Event ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
            ) : (
              <span className="text-gray-600">Loading...</span>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < eventsData.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreImages}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
