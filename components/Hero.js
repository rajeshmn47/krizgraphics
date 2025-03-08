import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-20 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">KRIZ Graphics</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Professional Graphics Design, Photo Editing, and Digital Solutions</p>
          <div className="flex justify-center space-x-4">
            <a href="/#portfolio" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
              View Portfolio
            </a>
            <a href="/#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}