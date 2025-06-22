import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const translationFiles = import.meta.glob('@/locales/*.json');

export default function useTranslation() {
    const location = useLocation();
    const pathname = location.pathname;
    const lang = pathname.split('/')[1] || 'ar';
    const [translations, setTranslations] = useState({});
    const [loading, setLoading] = useState(true);
    const ready = !loading && Object.keys(translations).length > 0;

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                setLoading(true);
                // Dynamic import using Vite's glob import
                const module = await translationFiles[`/src/locales/${lang}.json`]();
                setTranslations(module.default || module);
            } catch (error) {
                console.error(`Failed to load translations for ${lang}`, error);
                // Fallback to empty object if translation fails
                setTranslations({});
            } finally {
                setLoading(false);
            }
        };

        loadTranslations();
    }, [lang]);

    const t = (key) => {
        if (!ready) return key; // Return key if translations not ready
        return key
            .split('.')
            .reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), translations) || key;
    };

    return { t, lang, loading, ready };
}