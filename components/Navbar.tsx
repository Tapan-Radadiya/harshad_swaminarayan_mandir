"use client";

import Link from 'next/link';
import Image from 'next/image';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../app/context/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo/mandir_logo.webp" 
              alt="Temple Logo" 
              width={50} 
              height={50}
              className="mr-3"
            />
            <span className="text-xl font-bold text-primary">Harshad Swaminarayan Mandir</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-secondary hover:text-primary">{t('nav.home')}</Link>
          <Link href="/about" className="text-secondary hover:text-primary">{t('nav.about')}</Link>
          <Link href="/events" className="text-secondary hover:text-primary">{t('nav.events')}</Link>
          <Link href="/gallery" className="text-secondary hover:text-primary">{t('nav.gallery')}</Link>
          <Link href="/contact" className="text-secondary hover:text-primary">{t('nav.contact')}</Link>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;