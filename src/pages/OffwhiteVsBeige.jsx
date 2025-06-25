import DefaultLayout from '@/layouts/DefaultLayout';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';
import useTranslation from '@/hooks/useTranslation';

const OffwhiteVsBeige = () => {
    const { lang, t } = useTranslation();

    return (
        <DefaultLayout>
            <Seo
                title="ما الفرق بين أوف وايت وبيج؟ - Off-white vs Beige"
                description="تعرف على الفرق بين لون الأوف وايت والبيج من حيث الدرجة، التأثير، الاستخدام، وأكواد دهانات جوتن المناسبة لكل لون. أمثلة وصور توضيحية."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        ما الفرق بين أوف وايت وبيج؟ مقارنة شاملة بالأمثلة والاستخدامات
                    </h1>

                    <p className="mb-6">
                        عند اختيار لون دهان محايد، كثير من الناس يحتارون بين <strong>الأوف وايت</strong> و<strong>البيج</strong>. كلاهما يبدو ناعمًا وأنيقًا، لكن لكل منهما تأثير مختلف تمامًا على الإضاءة، إحساس المساحة، وحتى المزاج العام في الغرفة. في هذا المقال، نوضح لك الفروقات الأساسية بين اللونين، مع أمثلة مرئية، واستخدامات شائعة، وأكواد من دهانات جوتن لتسهيل القرار.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🧱 الفرق البصري بين أوف وايت وبيج</h2>
                    <table className="w-full mb-6 border text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">العنصر</th>
                                <th className="p-2 border">أوف وايت</th>
                                <th className="p-2 border">بيج</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2 border">الدرجة</td>
                                <td className="p-2 border">أبيض بلمسة دافئة أو رمادية</td>
                                <td className="p-2 border">بني فاتح يميل إلى الصفرة</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">الإحساس العام</td>
                                <td className="p-2 border">نقي وواسع بصريًا</td>
                                <td className="p-2 border">دافئ ومريح</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">يُفضل في</td>
                                <td className="p-2 border">الأماكن العصرية</td>
                                <td className="p-2 border">الأماكن الكلاسيكية والمريحة</td>
                            </tr>
                            <tr>
                                <td className="p-2 border">في الإضاءة</td>
                                <td className="p-2 border">يعكس الضوء بشكل كبير</td>
                                <td className="p-2 border">يعكس الضوء بدفء بسيط</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mb-8">
                        <img
                            src="/images/offwhite-vs-beige.png"
                            alt="جدار مطلي بالرمادي الدخاني – خلفية تلفاز بلون كحلي"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📌 استخدامات كل لون</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>أوف وايت:</strong> مثالي للصالات المفتوحة، المداخل، والغرف الصغيرة.</li>
                        <li><strong>البيج:</strong> رائع للمجالس، غرف المعيشة، وغرف النوم الهادئة.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🎨 شريحة ألوان لكل نوع</h2>

                    <h3 className="text-lg font-semibold mt-6 mb-2">1️⃣ أوف وايت نقي (Off-white)</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Klassisk Hvit – <strong>JOTUN 9918</strong></li>
                        <li>Egg White – <strong>JOTUN 1001</strong></li>
                        <li>Chi – <strong>JOTUN 1624</strong></li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">2️⃣ بيج دافئ (Warm Beige)</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Sandbeige – <strong>JOTUN 1939</strong></li>
                        <li>Soft Skin – <strong>JOTUN 10579</strong></li>
                        <li>Almond Beige – <strong>JOTUN 10678</strong></li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-6 mb-2">3️⃣ بيج رمادي (Greige)</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Comfort Grey – <strong>JOTUN 12078</strong></li>
                        <li>Misty Shadow – <strong>JOTUN 10249</strong></li>
                        <li>Soft Grey – <strong>JOTUN 0394</strong></li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🧠 كيف تختار اللون المناسب لك؟</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li>الإضاءة القوية → أوف وايت أو بيج رمادي.</li>
                        <li>الراحة والدفء → بيج دافئ.</li>
                        <li>الستايل العصري → Comfort Grey أو Chi.</li>
                        <li>التباين مع أثاث ملون → أوف وايت ناعم.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">❓ الأسئلة الشائعة</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>هل الأوف وايت ممل؟</strong> لا، هو لون متعدد الاستخدامات ويُبرز الأثاث.</li>
                        <li><strong>هل البيج موضة قديمة؟</strong> بالعكس، هو من أبرز صيحات 2025.</li>
                        <li><strong>هل يمكن دمج اللونين؟</strong> نعم، مثل استخدام أوف وايت للسقف وبيج للجدران.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 جرّب الألوان مباشرة على جدران منزلك</h2>
                    <p className="mb-8">
                        احجز زيارة مجانية ليقوم فريقنا بعرض عينات <strong>أوف وايت</strong> و<strong>بيج</strong> على جدارك، ومساعدتك في اختيار اللون الأنسب حسب ذوقك والإضاءة.
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

export default OffwhiteVsBeige;
