import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import DefaultLayout from '../layouts/DefaultLayout';
import "../App.css"

const Home = () => {
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
