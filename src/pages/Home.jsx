import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import DefaultLayout from '../layouts/DefaultLayout';
import Seo from '@/components/Seo';
import useTranslation from '@/hooks/useTranslation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css"

const Home = () => {
    const location = useLocation();
    const { t, loading } = useTranslation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Delay in milliseconds
        }
    }, [location.hash]);
    return (
        <DefaultLayout params={{ lang: '' }}>
            {!loading && (
                <Seo
                    title={`${t('header.home')} | ${t('footer.companyName')}`}
                    description={t('hero.description')}
                />
            )}
            <Hero />
            <ServicesSection />
            <WhyUs />
            <Testimonial />
        </DefaultLayout >
    );
};

export default Home;
