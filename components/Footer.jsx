import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 py-24 text-white bg-black md:px-20">
      <div className="container grid grid-cols-1 gap-8 mx-auto text-center md:grid-cols-4 md:text-left">
        {/* Logo & Contact */}
        <div>
          <h2 className="text-2xl font-bold">ICON CROSSFIT</h2>
          <p className="mt-2 text-gray-400">
            1, Padhuvanchery, Chennai - 600126
          </p>
          <p className="text-gray-400">iconcrossfit@gmail.com</p>
          <div className="flex justify-center mt-4 space-x-4 md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold">Menu</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Membership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Operational Hours */}
        <div>
          <h3 className="text-lg font-semibold">Operational</h3>
          <p className="mt-2 text-gray-400">Every day: 9:00 – 22:00</p>
          <p className="text-gray-400">Sat – Sun: 8:00 – 21:00</p>
          <h3 className="mt-4 text-lg font-semibold">New Schedule?</h3>
          <p className="font-semibold text-yellow-500">+91 99xxx-xxxxx</p>
        </div>
      </div>
      <hr className="w-96 border-t border-gray-300 mb-4 mt-10 mx-auto" />
      {/* Copyright & Back to Top */}
      <div className="flex flex-col items-center justify-center mt-1 text-sm text-gray-500 md:flex-row">
        <p>Copyright © ICON CROSSFIT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
