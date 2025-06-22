'use client';
import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const Contact = () => {
    const { t, lang } = useTranslation();

    return (
        <DefaultLayout>
            <Seo
                title={`${t('contact.title')} | ${t('footer.companyName')}`}
                description={t('contact.description')}
            />
            <section id="contact" className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-mfk-blue mb-4">
                            {t('contact.title')}
                        </h2>
                        <p className="text-gray-700 max-w-2xl mx-auto">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8" dir={lang == 'ar' ? 'rtl' : 'ltr'}>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-mfk-blue mb-6">
                                {t('contact.contactInfo')}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-mfk-blue/10 p-3 rounded-full">
                                        <svg className="w-5 h-5 text-mfk-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t('contact.phoneLabel')}</h4>
                                        <p className="text-gray-600">{t('contact.phoneNumber')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-mfk-blue/10 p-3 rounded-full">
                                        <svg className="w-5 h-5 text-mfk-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t('contact.emailLabel')}</h4>
                                        <p className="text-gray-600">{t('contact.emailAddress')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-mfk-blue/10 p-3 rounded-full">
                                        <svg className="w-5 h-5 text-mfk-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-700">{t('contact.addressLabel')}</h4>
                                        <p className="text-gray-600">{t('contact.address')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                            <iframe
                                className="w-full h-full border-0"
                                loading="lazy"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.061982342349!2d55.38968231548206!3d25.34937798382426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzU3LjgiTiA1NcKwMjMnMjYuOSJF!5e0!3m2!1sen!2sae!4v1624456789014!5m2!1sen!2sae"
                                title={t('contact.mapTitle')}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Contact;