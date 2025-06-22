import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    const sections = t('privacy.sections');


    return (
        <DefaultLayout>
            <Seo
                title="سياسة الخصوصية - Privacy Policy"
                description={t('privacy.subtitle')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    {/* Hero Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-mfk-blue mb-4">
                            {t('privacy.title')}
                        </h1>
                        <p className="text-gray-500 max-w-3xl mx-auto">
                            {t('privacy.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-md px-8 py-4 mb-12">
                        {Object.keys(sections).map((key) => (
                            <div key={key} className="mb-6">
                                <h2 className="text-2xl font-semibold text-mfk-blue mb-2">
                                    {sections[key].title}
                                </h2>
                                <p className="text-gray-700">
                                    {sections[key].content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default PrivacyPolicy;
