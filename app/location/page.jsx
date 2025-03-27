'use client';

import Head from 'next/head';

export default function Location() {
  return (
    <>
      <Head>
        <title>Our Locations - Icon CrossFit Fitness Studio</title>
        <meta name="description" content="Find our Icon CrossFit Fitness Studio branches near you." />
      </Head>

      {/* Full-width Image with Centered Text */}
      <div className="relative w-full pt-12 mt-10 md:pt-12">
        <img
          src="/images/locationbg.jpg"
          alt="Offering"
          className="object-cover object-center w-full h-[260px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="mt-10 text-4xl md:text-5xl font-extrabold text-black">
            LOCATION
          </h1>
        </div>
      </div>

      <section className="text-center py-8 dark:bg-gray-800 bg-gray-200 dark:text-white text-black/50">
        <h1 className="text-3xl font-bold">Find Your Nearest Icon CrossFit Fitness Studio</h1>
      </section>

      <section className="flex flex-col items-center gap-8 py-8 bg-gray-100">
        {/* Location 1 - Text Left, Map Right */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md w-full max-w-7xl">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-xl font-semibold text-red-600">📍 Icon CrossFit Fitness Studio</h2>
            <p className="text-gray-700 mt-2">🔥 The ultimate fitness destination for all!</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0255126480383!2d80.1053483!3d12.906081000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f9b46523bc1%3A0x8b65807cb9020a5d!2sIcon%20CrossFit%20Fitness%20studio!5e0!3m2!1sen!2sin!4v1742302890536!5m2!1sen!2sin"
            className="md:w-1/2 w-full h-80 rounded-lg mt-4 md:mt-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Location 2 - Text Right, Map Left */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white p-6 rounded-lg shadow-md w-full max-w-7xl">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-xl font-semibold text-red-600">📍 Icon Women & Kids Fitness Studio</h2>
            <p className="text-gray-700 mt-2">👩‍👦 Specially designed for women and kids to train in a comfortable environment.</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9564270716614!2d80.1064078!3d12.910522100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fb8cf1853a9%3A0xf7dbf2fde55e5188!2sIcon%20women%20and%20kids%20fitness%20studio!5e0!3m2!1sen!2sin!4v1742302919857!5m2!1sen!2sin"
            className="md:w-1/2 w-full h-80 rounded-lg mt-4 md:mt-0"
            loading="lazy"
          ></iframe>
        </div>

        {/* Location 3 - Text Left, Map Right */}
        <div className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md w-full max-w-7xl">
          <div className="md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-xl font-semibold text-red-600">📍 Icon CrossFit Mappedu</h2>
            <p className="text-gray-700 mt-2">💪 Premium training center with expert coaches and advanced equipment.</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2780543481717!2d80.1430856!3d12.8898338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52590057a928ed%3A0x7fc6f8ff98cc38ac!2sICON%20CROSSFIT%20FITNESS%20STUDIO%20MAPPEDU!5e0!3m2!1sen!2sin!4v1742302933055!5m2!1sen!2sin"
            className="md:w-1/2 w-full h-80 rounded-lg mt-4 md:mt-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="text-center py-10 bg-red-600 text-white">
        <h2 className="text-2xl font-bold">Ready to Start Your Fitness Journey? 🚀</h2>
        <p className="mt-2">Come visit us at any of our locations and take the first step towards a healthier you! 🏆</p>
        <a href="/contact" className="inline-block mt-4 px-6 py-3 bg-white text-red-600 font-bold text-lg rounded-md shadow-md transition hover:bg-gray-200">
          Contact Us
        </a>
      </section>
    </>
  );
}
