import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';

const DiscountPopup = () => {
    const { lang, t } = useTranslation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrolled = scrollTop / (scrollHeight - clientHeight);
            if (scrolled >= 0.75) {
                setVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-xl relative text-center max-w-sm w-full">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                    onClick={() => setVisible(false)}
                >
                    &times;
                </button>
                <h2 className="text-2xl font-bold text-mfk-blue mb-2">
                    {t('discountPopup.title')}
                </h2>
                <p className="mb-4 text-gray-800">
                    {t('discountPopup.text')}
                </p>
                <Link
                    to={`/${lang}/contact`}
                    className="bg-mfk-yellow text-mfk-blue font-bold px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
                >
                    {t('discountPopup.cta')}
                </Link>
            </div>
        </div>
    );
};

export default DiscountPopup;
