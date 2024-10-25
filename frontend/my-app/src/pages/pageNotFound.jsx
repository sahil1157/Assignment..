import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Page Not Found</h2>
      <p className='text-gray-500 mb-8'>Sorry, the page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className='px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-400'
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
