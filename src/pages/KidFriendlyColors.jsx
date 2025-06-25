import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const KidFriendlyColors = () => {
    const { lang, t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="ألوان سهلة التنظيف ومناسبة للأطفال - Easy-to-clean Colors for Kids"
                description="اكتشف أفضل ألوان دهانات مناسبة لغرف الأطفال وسهلة التنظيف من جوتن. درجات لا تُظهر الأوساخ بسهولة وأنواع دهان مناسبة مثل فينوماستيك الصحي والمتين."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">

                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        ألوان سهلة التنظيف ومناسبة للأطفال
                    </h1>

                    <p className="mb-6">
                        غرف الأطفال مكان مليء بالحركة واللعب والإبداع… وأحيانًا بالفوضى! لهذا السبب يحتاج الآباء إلى ألوان دهانات تجمع بين <strong>الجمال وسهولة التنظيف</strong>، دون أن تُظهر الأوساخ أو تتأثر بسرعة. في هذا المقال، نقدم لك أفضل <strong>ألوان غرف الأطفال من جوتن</strong>، مع نصائح لاختيار درجة عملية ومريحة.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🎯 ما الذي يجعل اللون مناسبًا للأطفال؟</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>لا تُظهر الأوساخ أو آثار الأصابع بسهولة.</li>
                        <li>سهلة المسح والتنظيف اليومي.</li>
                        <li>تعزز شعور الطفل بالراحة والأمان.</li>
                        <li>آمنة وخالية من المواد الضارة.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🎨 ألوان لا تُظهر الأوساخ بسهولة</h2>
                    <p className="mb-4">
                        تجنب الأبيض الناصع أو الألوان الداكنة جدًا. وركّز على الدرجات المتوسطة أو الهادئة.
                    </p>

                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">اللون</th>
                                <th className="p-2 border">الوصف</th>
                                <th className="p-2 border">كود جوتن</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">بيج رملي</td>
                                <td className="p-2 border">دافئ وهادئ ويُخفي البصمات</td>
                                <td className="p-2 border">JOTUN 1939 Sandbeige</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">أخضر ترابي</td>
                                <td className="p-2 border">يبعث الهدوء وسهل الدمج مع الديكور</td>
                                <td className="p-2 border">JOTUN 7718 Secret Green</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">أزرق سماوي</td>
                                <td className="p-2 border">مرح ومناسب للأطفال من كل الأعمار</td>
                                <td className="p-2 border">JOTUN 5030 St Pauls Blue</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">رمادي هادئ</td>
                                <td className="p-2 border">عملي ويُناسب جميع الأعمار</td>
                                <td className="p-2 border">JOTUN 12078 Comfort Grey</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mb-8">
                        <img
                            src="/images/child-room.webp"
                            alt="جدار مطلي بالرمادي الدخاني – خلفية تلفاز بلون كحلي"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🧽 نوع الدهان المناسب لغرف الأطفال</h2>
                    <p className="mb-6">
                        أفضل خيار هو <strong>فينوماستيك صحّي ومتين</strong> من جوتن، بتشطيب <strong>نصف لمعة</strong> أو <strong>ربع لمعة</strong>.
                        حيث يتميز بـ:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>سهولة التنظيف دون التأثير على اللون.</li>
                        <li>مقاوم للبقع والرطوبة.</li>
                        <li>خالٍ من المواد الضارة وآمن للأطفال.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📌 نصائح إضافية</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>اختر لونًا لا يملّ منه الطفل بسرعة.</li>
                        <li>استخدم تشطيب ناعم لتقليل الانعكاس.</li>
                        <li>اجعل أحد الجدران مخصصًا للّعب أو الرسم.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 جرّب الألوان مباشرة في غرفة طفلك</h2>
                    <p className="mb-8">
                        احجز زيارة مجانية وسنقوم بعرض عينات من دهانات <strong>سهلة التنظيف</strong> ومناسبة للأطفال على جدران الغرفة لتجربة اللون والإضاءة مباشرة.
                    </p>

                    <p className='mb-6'>
                        {lang === 'ar' ? (
                            <>
                                تعرف على&nbsp;
                                <Link to={`/${lang}/gloss-difference`} className='text-mfk-blue underline'>
                                    الفرق بين ربع لمعة ونص لمعة
                                </Link>
                                &nbsp;أو اقرأ عن&nbsp;
                                <Link to={`/${lang}/offwhite-vs-beige`} className='text-mfk-blue underline'>
                                    الفرق بين أوف وايت وبيج
                                </Link>
                                .
                            </>
                        ) : (
                            <>
                                Learn about&nbsp;
                                <Link to={`/${lang}/gloss-difference`} className='text-mfk-blue underline'>
                                    {t('header.glossDifference')}
                                </Link>
                                &nbsp;or read&nbsp;
                                <Link to={`/${lang}/offwhite-vs-beige`} className='text-mfk-blue underline'>
                                    {t('header.offwhiteVsBeige')}
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

export default KidFriendlyColors;
