import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const LightingAndColor = () => {
    const { lang, t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="كيف تختار لونك حسب نوع الإضاءة؟ - How to Choose Colors by Lighting Type?"
                description="تعرف على تأثير الإضاءة الطبيعية والفلورسنت والليد على ألوان الدهان. أمثلة عملية ودرجات جوتن المناسبة لكل نوع إضاءة + نصائح عملية."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        كيف تختار لونك حسب نوع الإضاءة؟
                    </h1>

                    <p className="mb-6">
                        اختيار اللون المثالي لا يقتصر على الذوق فقط، بل يعتمد بشكل كبير على <strong>نوع الإضاءة</strong> في المكان. نفس اللون قد يبدو دافئًا في غرفة، وباردًا أو باهتًا في أخرى بسبب تغير الإضاءة. في هذا المقال، نساعدك على اختيار اللون المناسب حسب نوع الإضاءة: <strong>الطبيعية، الفلورسنت، أو الليد</strong>، مع أمثلة واقعية ودرجات من جوتن.
                    </p>

                    {/* إضاءة طبيعية */}
                    <h2 className="text-xl font-semibold mt-10 mb-2">☀️ 1. الإضاءة الطبيعية (ضوء الشمس)</h2>
                    <p className="mb-4">
                        تعتبر الإضاءة الطبيعية الأفضل، لكنها تتغير على مدار اليوم ما بين ضوء ناعم صباحًا وضوء مباشر في فترة الظهر.
                    </p>
                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">اللون</th>
                                <th className="p-2 border">كود جوتن</th>
                                <th className="p-2 border">التأثير</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">بيج رملي</td>
                                <td className="p-2 border">JOTUN 1939 Sandbeige</td>
                                <td className="p-2 border">دافئ ومريح</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">أخضر ترابي</td>
                                <td className="p-2 border">JOTUN 7718 Secret Green</td>
                                <td className="p-2 border">طبيعي ومتناغم</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">أزرق سماوي باهت</td>
                                <td className="p-2 border">JOTUN 5030 St Pauls Blue</td>
                                <td className="p-2 border">منعش ومريح للعين</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* إضاءة فلورسنت */}
                    <h2 className="text-xl font-semibold mt-10 mb-2">💡 2. الإضاءة الفلورسنت (Fluorescent)</h2>
                    <p className="mb-4">
                        تميل إلى اللون الأزرق أو الأبيض البارد، وقد تجعل الألوان تبدو باهتة أو قاسية أحيانًا.
                    </p>
                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">اللون</th>
                                <th className="p-2 border">كود جوتن</th>
                                <th className="p-2 border">السبب</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">رمادي دافئ</td>
                                <td className="p-2 border">JOTUN 12078 Comfort Grey</td>
                                <td className="p-2 border">يعطي توازنًا للبرودة</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">خوخي ناعم</td>
                                <td className="p-2 border">JOTUN 12074 Peachy</td>
                                <td className="p-2 border">يضيف دفئًا ناعمًا</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">بيج كريمي</td>
                                <td className="p-2 border">JOTUN 1140 Sand</td>
                                <td className="p-2 border">يهدئ انعكاس الفلورسنت</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* إضاءة LED */}
                    <h2 className="text-xl font-semibold mt-10 mb-2">💎 3. إضاءة LED (الأكثر شيوعًا)</h2>
                    <p className="mb-4">
                        تعتمد على نوعها: بيضاء باردة أو صفراء دافئة. تُظهر التفاصيل والملمس بوضوح.
                    </p>
                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">اللون</th>
                                <th className="p-2 border">كود جوتن</th>
                                <th className="p-2 border">التأثير</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">كحلي ملكي</td>
                                <td className="p-2 border">JOTUN 4863 Evening Sky</td>
                                <td className="p-2 border">يبرز الأناقة والفخامة</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">رمادي لؤلؤي</td>
                                <td className="p-2 border">JOTUN 0394 Soft Grey</td>
                                <td className="p-2 border">ناعم ومريح للنظر</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">أخضر زيتوني</td>
                                <td className="p-2 border">JOTUN 8469 Green Leaf</td>
                                <td className="p-2 border">عصري ويُبرز التفاصيل</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📌 نصائح سريعة</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>اختبر اللون تحت الإضاءة الفعلية في الغرفة.</li>
                        <li>لا تعتمد فقط على شاشة الجوال أو الكتالوج.</li>
                        <li>استخدم عينة دهان (Color Tester) لتجربة اللون.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 جرّب الألوان تحت إضاءة منزلك</h2>
                    <p className="mb-8">
                        احجز زيارة مجانية ليقوم فريقنا بتجربة الألوان المناسبة مباشرة على جدرانك وتحت نفس الإضاءة، حتى ترى الفرق بنفسك.
                    </p>

                    <p className="mb-6">
                        {lang === 'ar' ? (
                            <>
                                اقرأ أيضًا&nbsp;
                                <Link to={`/${lang}/brighten-your-space`} className='text-mfk-blue underline'>
                                    لون يعطي وسع للمكان
                                </Link>
                                &nbsp;و&nbsp;
                                <Link to={`/${lang}/room-colors`} className='text-mfk-blue underline'>
                                    أفضل الألوان لكل غرفة
                                </Link>
                                .
                            </>
                        ) : (
                            <>
                                Check also&nbsp;
                                <Link to={`/${lang}/brighten-your-space`} className='text-mfk-blue underline'>
                                    {t('header.brightenYourSpace')}
                                </Link>
                                &nbsp;and&nbsp;
                                <Link to={`/${lang}/room-colors`} className='text-mfk-blue underline'>
                                    {t('header.roomColors')}
                                </Link>
                                .
                            </>
                        )}
                    </p>
                    <Link
                        to={`/${lang}/contact`}
                        className="bg-mfk-yellow text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center"
                    >
                        احجز زيارة مجانية الآن
                    </Link>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default LightingAndColor;
