import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const BrightenYourSpace = () => {
    const { t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="لون يعطي وسع للمكان - Colors That Broaden Spaces"
                description={t('blogPages.brightenYourSpace.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-4 text-center">
                        {t('blogPages.brightenYourSpace.title')}
                    </h1>
                    <p className="text-gray-700 whitespace-pre-line">
                        {t('blogPages.brightenYourSpace.content')}
                    </p>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default BrightenYourSpace;
