"use client";

import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function BeforeHeader() {
  return (
    <div className="fixed hidden lg:flex top-0 left-0 right-0 z-50 bg-[#62ddff] text-gray-800 font-[700] text-xs py-2 border-b border-gray-900">
      <div className="container flex items-center justify-between px-6 mx-auto md:px-8">
        {/* Left Side - Contact Info */}
        <div className="flex items-center space-x-4">
          <a href="tel:99xxxxxxxx" className="flex items-center space-x-1 hover:underline">
            <FaPhone size={12} />
            <span>99xxx-xxxxx</span>
          </a>
          <a href="mailto:iconfitness@gmail.com" className="flex items-center space-x-1 hover:underline">
            <FaEnvelope size={12} />
            <span>iconfitness@gmail.com</span>
          </a>
        </div>

        {/* Center - Promotional Message */}
        <div className="hidden md:block text-xs">
          <span>Sign up for 10% off your first order: </span>
          <a href="#" className="font-bold hover:underline">Sign Up</a>
        </div>

        {/* Right Side - Other Links */}
        <div className="flex items-center space-x-4 text-xs">
          <a href="#" className="hover:underline">Our Stores</a>
          <a href="#" className="hover:underline">United States (USD $)</a>
          <a href="#" className="hover:underline">English</a>
        </div>
      </div>
    </div>
  );
}
