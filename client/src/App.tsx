import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ArchStudent from './pages/ArchStudent';
import ArchPro from './pages/ArchPro';
import WebDev from './pages/WebDev';
import DataAnalysis from './pages/DataAnalysis';
import ProjectDetail from './pages/ProjectDetail';
import CountryLogs from './pages/logs/CountryLogs';
import LogsGlobe from './pages/logs/LogsGlobe';
import SearchResult from "./pages/SearchResult";
import 'leaflet/dist/leaflet.css';





const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/arch-student" element={<ArchStudent />} />
        <Route path="/portfolio/arch-pro" element={<ArchPro />} />
        <Route path="/portfolio/web-dev" element={<WebDev />} />
        <Route path="/portfolio/data-analysis" element={<DataAnalysis />} />
        <Route path="/portfolio/code/:id" element={<ProjectDetail />} />
        <Route path="/logs" element={<LogsGlobe />} />
        <Route path="/logs/:country" element={<CountryLogs />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/portfolio/code/:id" element={<ProjectDetail />} />
        <Route path="/portfolio/arch-pro/:id" element={<ProjectDetail />} />



      </Routes>
    </Router>
  );
};

export default App;
