import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing-page/landing-page';
import Service, { Business, IT, Legal } from './pages/service';
import About from './pages/About';
import { Contact } from './pages';
import TeamPage from './pages/team/Team';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/service/legal" element={<Legal />} />
        <Route path="/service/it" element={<IT />} />
        <Route path="/service/business" element={<Business />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}