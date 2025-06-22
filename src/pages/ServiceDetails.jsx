import { useParams, useNavigate } from 'react-router-dom';
import services from '@/data/ServiceList';
import subcategories from '@/data/SubCategoryList';
import DefaultLayout from '@/layouts/DefaultLayout';
import YellowLink from '@/components/YellowLink';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const ServiceDetails = () => {
    const { id, lang } = useParams();
    const navigate = useNavigate();
    const serviceId = parseInt(id, 10);
    const selectedService = services.find((s) => s.id === serviceId);
    const relatedSubcategories = subcategories.filter(
        (sub) => sub.category_id === serviceId
    );

    const { t, loading } = useTranslation();

    if (!selectedService) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-bold">{t('service.notFound')}</h2>
                <YellowLink to={`/${lang}/services`}>
                    {t('services.backToServices')}
                </YellowLink>
            </div>
        );
    }

    return (
        <DefaultLayout>
            {!loading && (
                <Seo
                    title={`${lang === 'ar' ? selectedService.title : selectedService.title_en} | ${t('footer.companyName')}`}
                    description={lang === 'ar' ? selectedService.description : selectedService.description_en}
                />
            )}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl font-bold mb-6 text-mfk-blue">
                        {lang === 'ar' ? selectedService.title : selectedService.title_en}
                    </h3>
                    <img
                        src={selectedService.img}
                        alt={lang === 'ar' ? selectedService.title : selectedService.title_en}
                        width={150}
                        height={150}
                        className="mx-auto mb-6"
                        loading="lazy"
                    />
                    <p className="text-lg text-gray-700 mb-10">
                        {lang === 'ar' ? selectedService.description : selectedService.description_en}
                    </p>

                    {relatedSubcategories.length > 0 && (
                        <>
                            <h4 className="text-2xl font-semibold mb-6 text-mfk-blue">{t('services.subServices')}</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedSubcategories.map((sub, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow text-mfk-blue"
                                        onClick={() => navigate(`/${lang}/services/${serviceId}/${sub.id}`)}
                                    >
                                        <h5 className="text-lg font-semibold mb-2">
                                            {lang === 'ar' ? sub.title : sub.title_en}
                                        </h5>
                                        <p className="text-sm text-gray-700">
                                            {lang === 'ar' ? sub.description : sub.description_en}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="mt-10">
                        <YellowLink to={`/${lang}/services`}>
                            {t('services.showAll')}
                        </YellowLink>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default ServiceDetails;