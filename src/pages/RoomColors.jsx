import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const RoomColors = () => {
    const { t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="أفضل الألوان لكل غرفة - Best Colors by Room Type"
                description={t('blogPages.roomColors.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-4 text-center">
                        {t('blogPages.roomColors.title')}
                    </h1>
                    <p className="text-gray-700 whitespace-pre-line">
                        {t('blogPages.roomColors.content')}
                    </p>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default RoomColors;
