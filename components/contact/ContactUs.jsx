'use client';

import React, { useState } from "react";

const branches = {
  "Icon CrossFit Fitness Studio": {
    address: "123 Fitness Street, City A",
    phone: "+91 98765 43210",
    email: "contact@iconcrossfit.com",
  },
  "Icon Women & Kids Fitness Studio": {
    address: "456 Wellness Avenue, City B",
    phone: "+91 87654 32109",
    email: "support@iconwomenfit.com",
  },
  "Icon CrossFit Mappedu": {
    address: "789 Strength Road, City C",
    phone: "+91 76543 21098",
    email: "info@iconcrossfitmappedu.com",
  },
};

const ContactUs = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

  return (
    <div className="max-w-screen-lg mt-32 mx-auto p-5 py-11">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        {/* Left Section */}
        <div className="dark:bg-gray-900 bg-gray-200 md:col-span-4 p-10  text-black dark:text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-sky-400">Touch</span>
          </h3>
          <p className="mt-4 leading-7 dark:text-gray-200 text-black">
            Reach out to us at our branches for inquiries or assistance!
          </p>

          {/* Branch Selection Dropdown */}
          <div className="mt-5">
            <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
              Select a Branch:
            </label>
            <select
              className="block w-full p-2 border border-gray-300 rounded-md dark:text-gray-200 text-gray-900 "
              onChange={(e) => setSelectedBranch(e.target.value)}
              value={selectedBranch}
            >
              <option value="">-- Choose a Branch --</option>
              {Object.keys(branches).map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>

          {/* Display Selected Branch Details */}
          {selectedBranch && (
            <div className="mt-5">
              <p className="text-lg font-semibold">{selectedBranch}</p>
              <p className="mt-2 dark:text-gray-300 text-gray-700">
                📍 Address: {branches[selectedBranch].address}
              </p>
              <p className="mt-2 dark:text-gray-300 text-gray-700">
                📞 Phone: {branches[selectedBranch].phone}
              </p>
              <p className="mt-2 dark:text-gray-300 text-gray-700">
                ✉ Email: {branches[selectedBranch].email}
              </p>
            </div>
          )}
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
              className="w-full bg-sky-400 text-white py-2 px-4 rounded-md hover:bg-sky-800 transition duration-300"
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
