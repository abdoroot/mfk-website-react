import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/services" element={<Services />} />
        <Route path="/:lang/services/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
