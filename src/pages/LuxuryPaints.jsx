import DefaultLayout from '@/layouts/DefaultLayout';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';

const LuxuryPaints = () => {
    const { lang, t } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="دهانات فخمة - Luxury Paints"
                description="اكتشف أفضل أنواع وألوان الدهانات الفخمة التي تضيف لمسة من الرقي والفخامة إلى منزلك. دهانات جوتن الفاخرة وأفكار لغرف المجالس والصالات."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">

                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        دهانات فخمة لجدران راقية: ألوان فاخرة ولمسات ملكية لمنزلك
                    </h1>

                    <p className="mb-6">
                        الفخامة ليست فقط في الأثاث أو التصميم، بل تبدأ من الجدران. اختيار <strong>دهان فخم</strong> بلون متقن ولمعة مناسبة يمكن أن يحوّل المساحة العادية إلى مساحة راقية تنبض بالفخامة والذوق.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">👑 ما الذي يميز الدهانات الفخمة؟</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>تشطيبات ناعمة ومتقنة تعكس الضوء بشكل مدروس.</li>
                        <li>ألوان غنية وراقية مثل الكحلي الملكي والرمادي الدخاني.</li>
                        <li>قوة تغطية عالية وثبات لوني.</li>
                        <li>ملمس مخملي أو لؤلؤي يضيف فخامة للجدران.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🖌️ أنواع دهانات فخمة ننصح بها</h2>
                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">النوع</th>
                                <th className="p-2 border">الوصف</th>
                                <th className="p-2 border">الاستخدام</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">فينوماستيك مذهل راقي</td>
                                <td className="p-2 border">لمسة حريرية ومظهر عصري</td>
                                <td className="p-2 border">المجالس، غرف النوم</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">دهان لؤلؤي</td>
                                <td className="p-2 border">تأثير ناعم يشبه القماش</td>
                                <td className="p-2 border">الحوائط المميزة</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">تشطيب خرساني/ميتاليك</td>
                                <td className="p-2 border">مظهر صناعي أنيق وعصري</td>
                                <td className="p-2 border">خلفيات تلفاز، الممرات</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-semibold mt-10 mb-2"> أفضل الألوان الفاخرة لهذا العام</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>كحلي ملكي – <strong>JOTUN 4863 Evening Sky</strong></li>
                        <li>رمادي دخاني – <strong>JOTUN 12078 Comfort Grey</strong></li>
                        <li>بيج مخملي – <strong>JOTUN 1939 Sandbeige</strong></li>
                        <li>ذهبي مطفي أو عاجي دافئ</li>
                    </ul>

                    <div className="mb-8">
                        <img
                            src="/images/goldmut.webp"
                            alt="جدار مطلي بالرمادي الدخاني – خلفية تلفاز بلون كحلي"
                            width={768}
                            height={768}
                            className="w-full h-auto md:h-100 md:w-80"
                            loading="lazy"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">أين يمكن استخدام الدهانات الفخمة؟</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>غرف المجالس الرسمية</li>
                        <li>صالات استقبال الضيوف</li>
                        <li>غرف نوم رئيسية</li>
                        <li>الممرات الفسيحة</li>
                        <li>المكاتب أو القاعات الخاصة</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2"> نصائح لاختيار اللون الفخم المناسب</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>اختر ألوان داكنة في المساحات ذات الإضاءة الجيدة.</li>
                        <li>استخدم درجات محايدة لتسليط الضوء على الأثاث.</li>
                        <li>ابتعد عن اللمعة الزائدة؛ الفخامة في التوازن والبساطة.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 هل ترغب بتجربة الألوان الفخمة مباشرة؟</h2>
                    <p className='mb-8'>
                        احجز زيارة مجانية ليقوم فريقنا بعرض عينات من <strong>ألوان الدهانات الفخمة</strong> مباشرة على جدران منزلك، حتى ترى النتيجة على الطبيعة وتتخذ القرار بثقة.
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

export default LuxuryPaints;
