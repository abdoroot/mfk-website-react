import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const Jotun2025Colors = () => {
    const { t, loading } = useTranslation();
    return (
        <DefaultLayout>
            {!loading && (
                <Seo
                    title={`${t('blogPages.jotun2025Colors.title')} | ${t('footer.companyName')}`}
                    description={t('blogPages.jotun2025Colors.content')}
                />
            )}
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-4 text-center">
                        {t('blogPages.jotun2025Colors.title')}
                    </h1>
                    <p className="text-gray-700 whitespace-pre-line">
                        {t('blogPages.jotun2025Colors.content')}
                    </p>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default Jotun2025Colors;
