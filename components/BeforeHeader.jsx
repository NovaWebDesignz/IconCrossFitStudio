"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

export default function BeforeHeader() {
  const contactDetails = [
    {
      icon: <FaPhone />,
      text: "99xxx-xxxxx",
      href: "tel:99xxxxxxxx",
    },
    {
      icon: <FaEnvelope />,
      text: "iconfitness@gmail.com",
      href: "mailto:iconfitness@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      text: "1, Padhuvanchery, Chennai - 600126",
      href: "https://maps.app.goo.gl/VQBBBPNP",
    },
  ];

  const socialLinks = [
    { icon: <FaYoutube size={20} />, href: "https://www.youtube.com/@Tambaram", hoverColor: "hover:text-yellow-500" },
    { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/mappedu", hoverColor: "hover:text-blue-500" },
    { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/padhuvanchery/", hoverColor: "hover:text-pink-500" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#f5faff] text-black text-sm py-0">
      <div className="container flex items-center justify-between px-6 py-2 mx-auto md:px-8">
        {/* Contact Details (Hidden on Small Screens) */}
        <div className="hidden space-x-8 md:flex">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-2 hover:underline"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors duration-200 ${item.hoverColor}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}