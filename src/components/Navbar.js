import Link from 'next/link';

const Navbar = () => {
  return (
<header className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
  <div className="w-10 h-10 bg-gray-400"></div>
  
  <nav className="hidden md:block">
    <ul className="flex space-x-6">
      <li><a href="#" className="text-gray-700 hover:text-gray-900">Завантаження</a></li>
      <li><a href="#" className="text-gray-700 hover:text-gray-900">Спільнота</a></li>
      <li><a href="#" className="text-gray-700 hover:text-gray-900">Підтримка</a></li>
    </ul>
  </nav>
  
  <div className="flex items-center space-x-4">
    <a href="#" className="text-gray-700 hover:text-gray-900">Логін</a>
    <div className="flex items-center space-x-1 cursor-pointer">
      <span className="text-gray-700">UA</span>
      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div> 
    {/* Стилі приблизно такі, натягав з інтернету приблизні стилі, можна юзати теілвінд, можна і самому писати*/}
  </div>
</header>
  );
};

export default Navbar;