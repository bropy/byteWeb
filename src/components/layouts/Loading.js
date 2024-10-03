import { useState, useEffect } from 'react';

const Loading = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? '' : prevDots + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-t-pink-500 border-r-blue-500 border-b-gray-300 border-l-gray-300 rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-white">{dots}</p>
      </div>
    </div>
  );
};

export default Loading;