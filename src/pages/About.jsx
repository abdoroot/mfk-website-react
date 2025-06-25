import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const About = () => {
    const { t, lang } = useTranslation();

    return (
        <DefaultLayout>
            <Seo
                title="من نحن - About Us"
                description={t('about.subtitle')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Hero Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-mfk-blue mb-4">
                            {t('about.title')}
                        </h1>
                        <p className=" text-gray-500 max-w-3xl mx-auto">
                            {t('about.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md px-8 py-4 mb-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-bold text-mfk-blue mb-4">
                                    {t('about.ourStory.title')}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {t('about.ourStory.paragraph1')}
                                </p>
                                <p className="text-gray-700">
                                    {t('about.ourStory.paragraph2')}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Commercial License Section */}
                    <div className="bg-white rounded-xl shadow-md px-8 py-6 mb-12">
                        <div>
                            <h2 className="text-2xl font-bold text-mfk-blue mb-4">
                                {t('about.license.title')}
                            </h2>
                            <p className="text-gray-700 mb-4">
                                {t('about.license.description')}
                            </p>
                            <a
                                href="/documents/TradeLicense.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition inline-block"
                            >
                                {t('about.license.download')}
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </DefaultLayout>
    );
};

export default About;