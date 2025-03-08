import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">KRIZ Graphics</h3>
            <p className="text-sm">From our humble beginnings in Chennai, we've grown into a dedicated team of creative professionals, delivering exceptional design solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-purple-400">Brand Identity</a></li>
              <li><a href="/#services" className="hover:text-purple-400">Web Design</a></li>
              <li><a href="/#services" className="hover:text-purple-400">Visual Design</a></li>
              <li><a href="/#services" className="hover:text-purple-400">Print Design</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/our-story" className="hover:text-purple-400">Our Story</Link></li>
              <li><a href="/#portfolio" className="hover:text-purple-400">Portfolio</a></li>
              <li><Link href="/contact" className="hover:text-purple-400">Contact</Link></li>
              <li><a href="/#services" className="hover:text-purple-400">Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-400"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-purple-400"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} KRIZ Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;