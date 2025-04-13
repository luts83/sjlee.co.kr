import React from 'react';

const DataAnalysis: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Analysis Portfolio</h1>
          <p className="text-lg text-gray-600">Data science and analysis projects showcasing insights and visualizations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img 
                src="/images/data-1.jpg" 
                alt="Data Analysis Project" 
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-0 right-0 p-2">
                <a 
                  href="https://github.com/username/data-project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Urban Development Analysis</h3>
              <p className="text-gray-600 mb-4">Analysis of urban development patterns using machine learning algorithms.</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Findings:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pattern recognition in urban growth</li>
                  <li>Predictive modeling for future development</li>
                  <li>Impact analysis on surrounding areas</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Pandas</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Scikit-learn</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Matplotlib</span>
              </div>

              <a 
                href="/projects/urban-analysis" 
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Full Analysis →
              </a>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysis; 