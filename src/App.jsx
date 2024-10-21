import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/WelcomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  
    setTimeout(() => {
          setLoading(false); // Data is loaded, set loading to false
    }, 2000); // Simulate network delay
  if (loading) {
    return <div className="flex justify-center items-center h-screen"><div className="loader"></div></div>;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage  />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
