"use client";

import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../app/context/LanguageContext';
import { useState } from 'react';

const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/mandir_logo.webp" 
                alt="Temple Logo" 
                width={40} 
                height={40}
                className="mr-2 sm:mr-3"
              />
              <span className="text-lg sm:text-xl font-bold text-primary truncate">Harshad Swaminarayan Mandir</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-secondary hover:text-primary">{t('nav.home')}</Link>
            <Link href="/about" className="text-secondary hover:text-primary">{t('nav.about')}</Link>
            <Link href="/events" className="text-secondary hover:text-primary">{t('nav.events')}</Link>
            <Link href="/gallery" className="text-secondary hover:text-primary">{t('nav.gallery')}</Link>
            <Link href="/contact" className="text-secondary hover:text-primary">{t('nav.contact')}</Link>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/" className="text-secondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
              <Link href="/about" className="text-secondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
              <Link href="/events" className="text-secondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('nav.events')}</Link>
              <Link href="/gallery" className="text-secondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('nav.gallery')}</Link>
              <Link href="/contact" className="text-secondary hover:text-primary" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;