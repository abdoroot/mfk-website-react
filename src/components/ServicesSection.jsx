import YellowLink from './YellowLink';
import services from '@/data/ServiceList';
import useTranslation from '@/hooks/useTranslation';

const truncate = (text, maxLength = 70) =>
    text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;

const Services = () => {
    const { t, lang } = useTranslation();

    return (
        <section id="services" className="py-16 bg-mfk-blue/5">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-10 text-mfk-blue">{t('services.title')}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <img
                                src={service.img || '/default.jpg'}
                                alt={lang === 'ar' ? service.title : service.title_en}
                                className="h-25 w-auto mx-auto mb-4"
                                width={100}
                                height={100}
                                loading="lazy"
                            />
                            <h4 className="text-xl font-semibold mb-2 text-mfk-blue">
                                {lang === 'ar' ? service.title : service.title_en}
                            </h4>
                            <p className="text-gray-700">
                                {lang === 'ar' ? truncate(service.description) : truncate(service.description_en)}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-10">
                    <YellowLink to={`/${lang}/services`}>{t('services.showAll')}</YellowLink>
                </div>
            </div>
        </section>
    );
};

export default Services;