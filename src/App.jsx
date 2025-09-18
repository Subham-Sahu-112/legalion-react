import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing-page/landing-page';
import Service, { Business, IT, Legal } from './pages/service';
import { Contact } from './pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service/legal" element={<Legal />} />
        <Route path="/service/it" element={<IT />} />
        <Route path="/service/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}