import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast'; // Add Toaster
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ArchStudent from './pages/ArchStudent';
import ArchPro from './pages/ArchPro';
import DataAnalysis from './pages/DataAnalysis';
import ProjectDetail from './pages/ProjectDetail';
import CountryLogs from './pages/logs/CountryLogs';
import LogsGlobe from './pages/logs/LogsGlobe';
import SearchResult from './pages/SearchResult';
import Footer from './components/Footer';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <html lang="en" />
          <title>Sangjin Lee Portfolio</title>
          <meta
            name="description"
            content="Portfolio site of Sangjin Lee — architecturally trained, digitally fluent, and commercially strategic."
          />
          <meta property="og:title" content="Sangjin Lee Portfolio" />
          <meta
            property="og:description"
            content="Explore architecture, digital, and data works by Sangjin Lee."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://sjlee.co.kr/images/og/main-og-image.png" />
          <meta property="og:url" content="https://sjlee.co.kr" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <Toaster position="bottom-right" toastOptions={{ duration: 2500 }} /> {/* Add Toaster */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/arch-student" element={<ArchStudent />} />
          <Route path="/portfolio/arch-pro" element={<ArchPro />} />
          <Route path="/portfolio/data-analysis" element={<DataAnalysis />} />
          <Route path="/portfolio/code/:id" element={<ProjectDetail />} />
          <Route path="/logs" element={<LogsGlobe />} />
          <Route path="/logs/:country" element={<CountryLogs />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/portfolio/code/:id" element={<ProjectDetail />} />
          <Route path="/portfolio/arch-pro/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;