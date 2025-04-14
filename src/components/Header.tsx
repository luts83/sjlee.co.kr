import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50 px-4 md:px-8 py-4 shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-black font-bold text-xl">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link to="/about" className="text-black text-xs hover:text-gray-600">ABOUT</Link>
          <Link to="/portfolio" className="text-black text-xs hover:text-gray-600">PORTFOLIO</Link>
          <Link to="/logs" className="text-black text-xs hover:text-gray-600">LOGS</Link>
          <Link to="/contact" className="text-black text-xs hover:text-gray-600">CONTACT</Link>
        </div>

        {/* Search Icon */}
        <div className="hidden md:block">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-black hover:text-gray-600">
            <i className="fas fa-search text-xs"></i>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-black hover:text-gray-600">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col py-4">
              {["about", "portfolio", "logs", "contact"].map(path => (
                <Link
                  key={path}
                  to={`/${path}`}
                  className="px-8 py-2 text-black hover:bg-gray-100 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {path.toUpperCase()}
                </Link>
              ))}
              <div className="px-8 py-2 text-center">
                <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-black hover:text-gray-600">
                  <i className="fas fa-search text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Input */}
        {isSearchOpen && (
  <div className="absolute top-full left-0 right-0 bg-white/80 backdrop-blur-sm border-b px-4 py-4 shadow-sm z-40">
    <form onSubmit={handleSearchSubmit} className="flex items-center justify-center gap-3 max-w-lg mx-auto">
      <div className="relative w-full">
        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search projects, logs..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-black text-sm font-light tracking-wide placeholder:text-gray-400 text-black"
          autoFocus
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 rounded-full border border-black text-black text-sm hover:bg-black hover:text-white transition-colors"
      >
        Go
      </button>
    </form>
  </div>
)}

      </nav>
    </header>
  );
};

export default Header;
