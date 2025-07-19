'use client';

import { useState } from 'react';
import { locales, localeNames } from '../app/i18n/config';
import { useLanguage } from '../app/context/LanguageContext';

export default function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleDropdown}
        className="flex items-center space-x-1 text-secondary hover:text-primary"
      >
        <span>{localeNames[locale as keyof typeof localeNames]}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => changeLanguage(loc)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  locale === loc ? 'bg-primary-light text-primary' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {localeNames[loc as keyof typeof localeNames]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}