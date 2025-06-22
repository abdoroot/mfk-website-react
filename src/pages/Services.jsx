'use client'
import { Link } from 'react-router-dom';
import DefaultLayout from '@/layouts/DefaultLayout';
import services from '@/data/ServiceList';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';


const ServicesPage = () => {
    const { t, lang, ready } = useTranslation();

    return (
        <DefaultLayout>
            {ready && (
                <Seo
                    title={`${t('services.all')} | ${t('footer.companyName')}`}
                    description={t('footer.description')}
                />
            )}
            <section id="services" className="py-16 bg-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 text-mfk-blue">{t('services.all')}</h1>
                    <div className="container mx-auto px-4 text-center">
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <Link
                                    to={`/${lang}/services/${service.id}`}
                                    key={service.id}
                                    className="group block bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow hover:border-mfk-yellow border-2 border-transparent"
                                >
                                    <img
                                        width={100}
                                        height={100}
                                        src={service.img}
                                        alt={service.title}
                                        className="h-25 mx-auto mb-4"
                                    />
                                    <h4 className="text-xl font-semibold mb-2 text-mfk-blue ">{lang == 'ar' ? service.title : service.title_en}</h4>
                                    <p className="text-gray-700">{lang == 'ar' ? service.description.slice(0, 120) : service.description_en.slice(0, 120)}...</p>
                                    <span className="text-mfk-yellow font-bold underline hover:text-mfk-yellow transition-colors">
                                        {t("services.discover_more")}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default ServicesPage;
