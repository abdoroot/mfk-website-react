import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Colors from './pages/Colors';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RoomColors from './pages/RoomColors';
import BrightenYourSpace from './pages/BrightenYourSpace';
import Jotun2025Colors from './pages/Jotun2025Colors';
import LuxuryPaints from './pages/LuxuryPaints';
import GlossDifference from './pages/GlossDifference';
import LightingAndColor from './pages/LightingAndColor';
import KidFriendlyColors from './pages/KidFriendlyColors';
import ProjectsGallery from './pages/ProjectsGallery';
import OffwhiteVsBeige from './pages/OffwhiteVsBeige';
import Blog from './pages/Blog';
import PaintingCalculator from './pages/PaintingCalculator';
import useGTMPageView from '@/components/useGTMPageView';

const RouterContent = () => {
    const location = useLocation(); // ✅ Safe here
    useGTMPageView();

    useEffect(() => {
        NProgress.start();
        NProgress.done();
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/colors" element={<Colors />} />
            <Route path="/:lang/room-colors" element={<RoomColors />} />
            <Route path="/:lang/brighten-your-space" element={<BrightenYourSpace />} />
            <Route path="/:lang/jotun-2025-colors" element={<Jotun2025Colors />} />
            <Route path="/:lang/luxury-paints" element={<LuxuryPaints />} />
            <Route path="/:lang/gloss-difference" element={<GlossDifference />} />
            <Route path="/:lang/lighting-and-color" element={<LightingAndColor />} />
            <Route path="/:lang/kid-friendly-colors" element={<KidFriendlyColors />} />
            <Route path="/:lang/projects-gallery" element={<ProjectsGallery />} />
            <Route path="/:lang/offwhite-vs-beige" element={<OffwhiteVsBeige />} />
            <Route path="/:lang/painting-calculator" element={<PaintingCalculator />} />
            <Route path="/painting-calculator" element={<PaintingCalculator />} />
            <Route path="/:lang/blog" element={<Blog />} />
            <Route path="/:lang/services" element={<Services />} />
            <Route path="/:lang/services/:id" element={<ServiceDetails />} />
        </Routes>
    );
}

export default RouterContent;

