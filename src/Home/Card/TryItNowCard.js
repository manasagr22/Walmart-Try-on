import React from 'react';
import img1 from '../../assets/SampleTryNow.png'

export default function TryItNowCard({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          ✕
        </button>
        <div className="text-center mb-4"> {/* Centering the heading */}
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            Here's Your Look
          </h2>
        </div>
        <div className="overflow-x-scroll flex space-x-4 py-4">
          {/* Using the imported image */}
          <img src={img1} alt="Sample User" className="rounded-full" />
            
        </div>
        <div className="flex justify-between items-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceed</button>
        <div className="flex items-center ml-auto text-blue-500 font-medium">
            <span className="mr-2">Like your look? Buy it now!</span>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Buy Now</button>
        </div>
        </div>


      </div>
    </div>
  );
}
