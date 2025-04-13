import React from 'react';

const WebDev: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Web Development Portfolio</h1>
          <p className="text-lg text-gray-600">Full-stack web development projects and applications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="/images/webdev-1.jpg" 
                alt="Web Project" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 p-2">
                <a 
                  href="https://github.com/username/project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">Modern e-commerce platform with real-time inventory management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">MongoDB</span>
              </div>
              <a 
                href="https://demo-project.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Live Demo →
              </a>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default WebDev; 