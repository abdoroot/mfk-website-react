import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const ProjectsGallery = () => {
    const { t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="قبل/بعد – مشروع دهان حقيقي - Before/After – Real Paint Project"
                description={t('blogPages.projectsGallery.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-4 text-center">
                        {t('blogPages.projectsGallery.title')}
                    </h1>
                    <p className="text-gray-700 whitespace-pre-line">
                        {t('blogPages.projectsGallery.content')}
                    </p>

                    <p className='mt-6'>
                        {t('blog.intro')}
                        {" "}
                        <Link to={`/${t('header.colorsGuide') === 'دليل الألوان' ? 'ar' : 'en'}/colors`} className='text-mfk-blue underline'>
                            {t('header.colorsGuide')}
                        </Link>
                        {" "}
                        <Link to={`/${t('header.jotun2025Colors') === 'كتالوج جوتن 2025' ? 'ar' : 'en'}/jotun-2025-colors`} className='text-mfk-blue underline'>
                            {t('header.jotun2025Colors')}
                        </Link>
                        .
                    </p>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default ProjectsGallery;
