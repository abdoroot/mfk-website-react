import { useLocation, useNavigate } from 'react-router-dom';
import { locales } from '@/lib/i18n';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher({ mobile = false }) {
    const location = useLocation();
    const navigate = useNavigate();
    const currentLang = location.pathname.split('/')[1] || 'ar';
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (locale) => {
        const segments = location.pathname.split('/');
        segments[1] = locale;
        navigate(segments.join('/'));
        setIsOpen(false);
    };

    return (
        <div className={`relative ${mobile ? 'w-full' : 'group'}`}>
            {/* Current language display */}
            <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md hover:bg-mfk-blue/10 transition-colors ${mobile ? 'w-full justify-between' : ''}`}
                aria-label="Change language"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-sm font-medium text-mfk-blue">
                    {currentLang.toUpperCase()}
                </span>
                <svg
                    className="w-4 h-4 text-mfk-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown menu */}
            <div
                className={`absolute ${mobile ? 'relative mt-0 w-full' : 'right-0 mt-1 w-32'} bg-white rounded-md shadow-lg overflow-hidden ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200 z-50`}
            >
                {Object.entries(locales).map(([code, { name }]) => (
                    <button
                        key={code}
                        onClick={() => changeLanguage(code)}
                        className={`w-full text-right px-4 py-2 text-sm hover:bg-mfk-blue/10 transition-colors ${currentLang === code
                            ? 'text-mfk-blue font-bold bg-mfk-blue/5'
                            : 'text-gray-700'
                            }`}
                    >
                        <span className="flex items-center gap-2">
                            <img
                                src={`/images/flags/${code}.svg`}
                                width={16}
                                height={12}
                                alt={name}
                                className="w-4 h-3 object-contain"
                            />
                            {name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}