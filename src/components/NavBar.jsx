import { useState } from 'react';
import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
    const { t, lang } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-mfk-blue">
                        <Link to={`/${lang}`}>
                            <img
                                src='/images/logo_120px.png'
                                width="60"
                                height="180"
                                className="h-18"
                                alt="شعار الشركة"
                            />
                        </Link>
                    </h1>

                    {/* Desktop Navigation */}
                    <div className="flex items-center gap-8">
                        <ul className="hidden md:flex gap-6 items-center">
                            <NavItem to={`/${lang}`} text={t('header.home')} />
                            <NavItem to={`/${lang}/services`} text={t('header.services')} />
                            <NavItem to={`/${lang}#whyus`} text={t('header.whyus')} />
                            <NavItem to={`/${lang}#testimonials`} text={t('header.testimonials')} />
                            <NavItem to={`/${lang}/contact`} text={t('header.contact')} />
                            <li>
                                <LanguageSwitcher />
                            </li>
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden bg-transparent text-mfk-blue"
                            onClick={toggleMenu}
                            aria-label="قائمة التنقل"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (shown when isMenuOpen is true) */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <ul className="flex flex-col gap-4">
                            <MobileNavItem to={`/${lang}`} text={t('header.home')} onClick={toggleMenu} />
                            <MobileNavItem to={`/${lang}/services`} text={t('header.services')} onClick={toggleMenu} />
                            <MobileNavItem to={`/${lang}#whyus`} text={t('header.whyus')} onClick={toggleMenu} />
                            <MobileNavItem to={`/${lang}#testimonials`} text={t('header.testimonials')} onClick={toggleMenu} />
                            <MobileNavItem to={`/${lang}/contact`} text={t('header.contact')} onClick={toggleMenu} />
                            <li className="px-4 py-2">
                                <LanguageSwitcher mobile />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Reusable NavItem component for desktop
const NavItem = ({ to, text }) => (
    <li>
        <Link to={to} className="text-mfk-blue font-bold hover:text-mfk-blue/80 transition-colors">
            {text}
        </Link>
    </li>
);

// Reusable MobileNavItem component
const MobileNavItem = ({ to, text, onClick }) => (
    <li>
        <Link
            to={to}
            onClick={onClick}
            className="block py-2 px-4 font-medium text-mfk-blue hover:bg-mfk-blue/10 rounded transition-colors"
        >
            {text}
        </Link>
    </li>
);

export default NavBar;