"use client";

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-on-primary py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Harshad Swaminarayan Mandir</h3>
            <p className="mb-2">123 Temple Street</p>
            <p className="mb-2">City, State 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@harshadmandir.org</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Temple Hours</h3>
            <p className="mb-2">Monday - Friday: 7:00 AM - 8:00 PM</p>
            <p className="mb-2">Saturday: 6:00 AM - 9:00 PM</p>
            <p>Sunday: 6:00 AM - 9:00 PM</p>
          </div>
        </div>
        
        <div className="border-t border-primary mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Harshad Swaminarayan Mandir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;