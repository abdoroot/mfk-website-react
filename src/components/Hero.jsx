import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';

const Hero = () => {
    const { t, lang } = useTranslation();

    return (
        <section id="hero" className="relative bg-gray-50 py-20 md:py-28 sm:py-10" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className={lang === 'ar' ? 'md:w-1/2 text-right' : 'md:w-1/2'}>
                    <h1 className="text-4xl md:text-5xl font-bold text-mfk-blue mb-6">
                        {t('hero.title')} <span className="text-mfk-yellow">{t('hero.titleHighlight')}</span>
                    </h1>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Link
                            to={`/${lang}/services`}
                            className="bg-mfk-yellow text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center"
                        >
                            {t('hero.primaryButton')}
                        </Link>
                        <Link
                            to={`/${lang}/services`}
                            className="bg-white text-mfk-blue border border-mfk-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition text-center"
                        >
                            {t('hero.secondaryButton')}
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-mfk-yellow/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-mfk-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-gray-700">{t('hero.features.guarantee')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-mfk-yellow/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-mfk-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-gray-700">{t('hero.features.emergency')}</span>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-xl">
                        <img
                            src='/images/hero-image.png'
                            alt="فريق صيانة منزلية محترف"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            loading="eager"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <p className="text-white text-lg font-medium">
                                "{t('hero.testimonial')}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;