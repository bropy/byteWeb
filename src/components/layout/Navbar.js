import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const { lang, setLang, translations } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const dropdownRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleBurger = () => setIsBurgerOpen(!isBurgerOpen);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (burgerRef.current && !burgerRef.current.contains(event.target)) {
        setIsBurgerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center w-full justify-between px-4 py-4 bg-white">
      <Link href="/" className="block w-10 h-10 bg-gray-400">
      </Link>
      
      <nav className="hidden md:block flex-grow">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/download" className="text-gray-700 hover:text-gray-900">{translations.download || 'Завантаження'}</Link></li>
          <li><Link href="/community" className="text-gray-700 hover:text-gray-900">{translations.community || 'Спільнота'}</Link></li>
          <li><Link href="/support" className="text-gray-700 hover:text-gray-900">{translations.support || 'Підтримка'}</Link></li>
        </ul>
      </nav>
      
      <div className="flex items-center space-x-4">
      <Link href="/login" className="text-gray-700 hover:text-gray-900">
        <span className="hidden md:inline">{translations.login || 'Логін'}</span>
        <svg className="w-6 h-6 md:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="black"/>
          <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="white"/>
          <path d="M17 15C17 16.6569 17 18 12 18C7 18 7 16.6569 7 15C7 13.3431 9.23858 12 12 12C14.7614 12 17 13.3431 17 15Z" fill="white"/>
        </svg>
      </Link>

        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown}
            className="flex items-center space-x-1 text-gray-900 hover:text-gray-900 focus:outline-none"
          >
            <span>{lang.toUpperCase()}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
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

        <div className="md:hidden relative" ref={burgerRef}>
          <button 
            onClick={toggleBurger}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
          </button>
          {isBurgerOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
              <Link href="/download" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {translations.download || 'Завантаження'}
              </Link>
              <Link href="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {translations.community || 'Спільнота'}
              </Link>
              <Link href="/support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                {translations.support || 'Підтримка'}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;