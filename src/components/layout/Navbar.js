import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar = () => {
  const { lang, setLang, translations } = useLanguage();

  function toggleLanguage() {
    setLang(lang === 'ua' ? 'en' : 'ua');
  }
  return (
<header className="flex items-center justify-between px-4 py-4 bg-white pt-16">
  <div className="w-10 h-10 bg-gray-400"></div>
  
  <nav className="hidden md:block">
    <ul className="flex space-x-6">
      <li><Link href="/download" className="text-gray-700 hover:text-gray-900">Завантаження</Link></li>
      <li><Link href="/community" className="text-gray-700 hover:text-gray-900">Спільнота</Link></li>
      <li><Link href="/support" className="text-gray-700 hover:text-gray-900">Підтримка</Link></li>
    </ul>
  </nav>
  
  <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          {translations.login || 'Логін'}
        </a>
        <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleLanguage}>
          <span className="text-gray-700">{lang.toUpperCase()}</span>
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
</header>
  );
};

export default Navbar;