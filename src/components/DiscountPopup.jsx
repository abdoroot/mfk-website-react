import { useState, useEffect } from 'react';
import useTranslation from '@/hooks/useTranslation';

const DiscountPopup = () => {
    const { lang, t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [mobile, setMobile] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('discountPopupShown')) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const scrolled = scrollTop / (scrollHeight - clientHeight);
            if (scrolled >= 0.75) {
                setVisible(true);
                localStorage.setItem('discountPopupShown', 'true');
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = async () => {
        try {
            await fetch('https://mfk.ae/scripts/send-discount-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ mobile }).toString(),
            });
        } catch (err) {
            console.error('Failed to submit discount form', err);
        } finally {
            setSubmitted(true);
        }
    };

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
                {submitted ? (
                    <p className="text-lg mt-6">{t('discountPopup.thankYou')}</p>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-mfk-blue mb-2">
                            {t('discountPopup.title')}
                        </h2>
                        <p className="mb-4 text-gray-800">
                            {t('discountPopup.text')}
                        </p>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder={t('discountPopup.mobilePlaceholder')}
                            className="w-full mb-4 border rounded-md p-2"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-mfk-yellow text-mfk-blue font-bold px-4 py-2 rounded-lg hover:bg-opacity-90 transition w-full"
                        >
                            {t('discountPopup.cta')}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default DiscountPopup;
