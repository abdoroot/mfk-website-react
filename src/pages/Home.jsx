import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import DefaultLayout from '../layouts/DefaultLayout';
import { useEffect } from 'react';
import "../App.css"

const Home = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Delay in milliseconds
        }
    }, []);
    return (
        <DefaultLayout params={{ lang: '' }}>
            <Hero />
            <ServicesSection />
            <WhyUs />
            <Testimonial />
        </DefaultLayout >
    );
};

export default Home;
