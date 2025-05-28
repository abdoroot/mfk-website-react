'use client';
import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';

const About = () => {
    const { t, lang } = useTranslation();

    return (
        <DefaultLayout>
            <section id="About" className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-mfk-blue mb-4">
                            {t('contact.title')}
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid" dir={lang == 'ar' ? 'rtl' : 'ltr'}>

                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default About;