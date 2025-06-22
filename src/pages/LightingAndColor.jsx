import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const LightingAndColor = () => {
    const { t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="كيف تختار لونك حسب نوع الإضاءة؟ - How to Choose Colors by Lighting Type?"
                description={t('blogPages.lightingAndColor.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-4 text-center">
                        {t('blogPages.lightingAndColor.title')}
                    </h1>
                    <p className="text-gray-700 whitespace-pre-line">
                        {t('blogPages.lightingAndColor.content')}
                    </p>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default LightingAndColor;
