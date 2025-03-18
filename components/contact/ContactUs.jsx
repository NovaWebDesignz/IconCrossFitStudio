import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-screen-lg mt-32 mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        {/* Left Section */}
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>

          {/* Address */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 489.536 489.536"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M488.554 476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5 0-112.5 52.1-112.5 117.7 0 17.6 8.2 43.1 19.9 70.8h-39.7c-4.2 0-8.3 3.1-9.4 7.3l-99 280.2c-3.2 10.3 6.3 13.5 9.4 13.5h468.8c4.2 0.5 12.5-4.2 9.4-13.5z" />
            </svg>
            <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
          </div>

          {/* Phone */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 60.002 60.002"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M59.002 37.992c-3.69 0-6.693-3.003-6.693-6.693 0-0.553-0.447-1-1-1s-1 0.447-1 1c0 4.794 3.899 8.693 8.693 8.693 0.553 0 1-0.447 1-1s-0.447-1-1-1z" />
            </svg>
            <span className="text-sm">+93 749 99 65 50</span>
          </div>

          {/* Email */}
          <div className="flex items-center mt-5">
            <svg
              className="h-6 mr-2 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm13.295 20.523L30 29.061l-13.295-8.538a1 1 0 0 1 1.295-1.563L30 26.939l12-7.417a1 1 0 1 1 1.295 1.563z" />
            </svg>
            <span className="text-sm">contact@yourdomain.com</span>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:col-span-8 p-10">
          <h3 className="text-2xl font-semibold text-gray-900">Send us a Message</h3>
          <form className="mt-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
