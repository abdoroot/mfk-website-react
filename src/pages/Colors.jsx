import DefaultLayout from '@/layouts/DefaultLayout';
import colors from '@/data/colors';
import useTranslation from '@/hooks/useTranslation';

const ColorsPage = () => {
    const { lang, t } = useTranslation();

    return (
        <DefaultLayout>
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-mfk-blue mb-8 text-center">
                        {t('colors.title')}
                    </h1>
                    {colors.map((category, idx) => (
                        <div key={idx} className="mb-10">
                            <h2 className="text-2xl font-semibold text-mfk-blue mb-4">
                                {lang === 'ar' ? category.category_ar : category.category_en}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.colors.map((c, i) => (
                                    <div key={i} className="border rounded-lg p-2 text-center bg-white shadow">
                                        <div className="w-full h-16 rounded" style={{ background: c.color }} />
                                        <p className="mt-2 text-sm font-semibold text-mfk-blue">
                                            {lang === 'ar' ? c.name_ar : c.name_en}
                                        </p>
                                        <p className="text-xs text-gray-600">{c.code}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </DefaultLayout>
    );
};

export default ColorsPage;
