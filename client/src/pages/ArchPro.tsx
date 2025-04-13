import React from 'react';

const ArchPro: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Architecture Portfolio</h1>
          <p className="text-lg text-gray-600">Professional architectural projects and built works</p>
        </div>

        {/* Map Section */}
        <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gray-200 h-[400px] flex items-center justify-center">
            {/* Map will be implemented here */}
            <p className="text-gray-600">Interactive Project Map</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/arch-pro-1.jpg" 
              alt="Commercial Project" 
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Complex</h3>
              <p className="text-gray-600 mb-4">Modern commercial development in urban setting.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Commercial</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Urban</span>
              </div>
              <div className="text-sm text-gray-500">
                <p>Location: Seoul, South Korea</p>
                <p>Completed: 2023</p>
              </div>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default ArchPro; 