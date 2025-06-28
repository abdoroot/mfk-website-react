import BlogLayout from '@/layouts/BlogLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const GlossDifference = () => {
    const { lang, t } = useTranslation();

    return (
        <BlogLayout>
            <Seo
                title="الفرق بين ربع لمعة ونص لمعة جوتن - Quarter vs Half Gloss"
                description="تعرف على الفرق بين ربع لمعة ونص لمعة في دهانات جوتن، مميزات كل نوع، وأين يُستخدم، مع جدول مقارنة واضح."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        الفرق بين ربع لمعة ونص لمعة في الدهانات
                    </h1>

                    <p className="mb-6">
                        عند اختيار نوع تشطيب الدهان، ستسمع كثيرًا مصطلحات مثل: دهان مطفي، ربع لمعة، نص لمعة، أو لمعة كاملة. لكن ما الفرق فعليًا بين <strong>ربع لمعة ونص لمعة</strong>؟ وأيهما يناسب غرفتك أكثر؟ في هذا المقال نشرح الفرق من حيث الشكل، الأداء، الاستخدام، والنتيجة النهائية.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🪞 ما هو دهان ربع لمعة؟</h2>
                    <p className="mb-4">
                        دهان <strong>ربع لمعة (25%)</strong> هو دهان بلمعة خفيفة جدًا، يعطي مظهرًا شبه مطفي، مع القليل من الانعكاس الضوئي.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>يعطي مظهر راقٍ وناعم.</li>
                        <li>يخفي عيوب الجدران بدرجة جيدة.</li>
                        <li>سهل التنظيف مقارنة بالمطفي.</li>
                        <li>مناسب للأماكن التي تحتاج دفء بصري.</li>
                    </ul>
                    <p className="mb-6 font-medium">📍 الاستخدام: غرف النوم – الممرات – المجالس – الأسقف.</p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">💡 ما هو دهان نص لمعة؟</h2>
                    <p className="mb-4">
                        دهان <strong>نص لمعة (50%)</strong> يتمتع بلمعة متوسطة وواضحة أكثر من الربع لمعة، ويعكس الضوء بشكل أكبر.
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>سهل التنظيف جدًا.</li>
                        <li>مقاوم أكثر للرطوبة.</li>
                        <li>يعطي شعور بالنظافة والانتعاش.</li>
                    </ul>
                    <p className="mb-6 font-medium">📍 الاستخدام: المطبخ – الحمام – المداخل – الجدران المعرضة للرطوبة أو الاتساخ.</p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">📊 جدول مقارنة بين ربع لمعة ونص لمعة</h2>
                    <table className="w-full text-sm border border-gray-300 mb-6">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border p-2">الخاصية</th>
                                <th className="border p-2">ربع لمعة</th>
                                <th className="border p-2">نص لمعة</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">اللمعان</td>
                                <td className="border p-2">خفيف جدًا</td>
                                <td className="border p-2">متوسط</td>
                            </tr>
                            <tr>
                                <td className="border p-2">إخفاء عيوب الجدار</td>
                                <td className="border p-2">ممتاز</td>
                                <td className="border p-2">جيد</td>
                            </tr>
                            <tr>
                                <td className="border p-2">سهولة التنظيف</td>
                                <td className="border p-2">جيدة</td>
                                <td className="border p-2">ممتازة</td>
                            </tr>
                            <tr>
                                <td className="border p-2">الانعكاس الضوئي</td>
                                <td className="border p-2">منخفض</td>
                                <td className="border p-2">متوسط</td>
                            </tr>
                            <tr>
                                <td className="border p-2">الاستخدام المثالي</td>
                                <td className="border p-2">غرف النوم، المجالس</td>
                                <td className="border p-2">المطابخ، الحمامات</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🎨 توصيات من جوتن</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>فينوماستيك هوم ناعم الحريري – ربع لمعة:</strong> مثالي لغرف النوم والمجالس.</li>
                        <li><strong>فينوماستيك صحّي ومتين – نص لمعة:</strong> مناسب للمطابخ والحمامات.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 هل ترغب بتجربة الفرق فعليًا؟</h2>
                    <p className='mb-8'>
                        احجز زيارة مجانية ليقوم فريقنا بعرض عينات دهان <strong>ربع لمعة</strong> و<strong>نص لمعة</strong> مباشرة على جدران منزلك، حتى ترى الفروق بنفسك وتتخذ القرار الأنسب لك.
                    </p>
                    <div>
                        <Link
                            to={`/${lang}/contact`}
                            className="bg-mfk-yellow text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center inline-block"
                        >
                            احجز زيارتك الآن
                        </Link>
                    </div>

                </div>
            </section>
        </BlogLayout>
    );
};

export default GlossDifference;
