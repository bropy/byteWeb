import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const { lang, setLang, translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-4 bg-white pt-16">
      <div className="w-10 h-10 bg-gray-400"></div>
      
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><Link href="/download" className="text-gray-700 hover:text-gray-900">{translations.download || 'Завантаження'}</Link></li>
          <li><Link href="/community" className="text-gray-700 hover:text-gray-900">{translations.community || 'Спільнота'}</Link></li>
          <li><Link href="/support" className="text-gray-700 hover:text-gray-900">{translations.support || 'Підтримка'}</Link></li>
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <span>{lang.toUpperCase()}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded-md shadow-xl z-20">
              <button 
                onClick={() => changeLanguage('ua')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                UA
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                EN
              </button>
            </div>
          )}
        </div>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          {translations.login || 'Логін'}
        </a>
      </div>
    </header>
  );
};

export default Navbar;