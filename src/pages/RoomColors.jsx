import BlogLayout from '@/layouts/BlogLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const RoomColors = () => {
    const { t, lang } = useTranslation();
    return (
        <BlogLayout>
            <Seo
                title="أفضل الألوان لكل غرفة - Best Colors by Room Type"
                description={t('blogPages.roomColors.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        أفضل الألوان لكل غرفة في منزلك: دليل عملي مع أمثلة وصور قبل وبعد
                    </h1>

                    <p className="mb-4">
                        هل تبحث عن تغيير ألوان منزلك لكنك محتار في اختيار اللون المناسب لكل غرفة؟
                        في هذا المقال، نقدم لك دليلًا عمليًا لاختيار <strong>أفضل لون لغرفة النوم، الصالة، المجلس، والمطبخ</strong>.
                        بالإضافة إلى روابط مباشرة لألوان مميزة من دهانات شهيرة مثل <strong>جوتن</strong>، وصور "قبل وبعد" لتساعدك على التخيل،
                        ونصائح من خبراء الدهانات في الخليج.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">🛏️ لون غرفة النوم: راحة وهدوء</h2>
                    <p className="mb-2">
                        غرفة النوم هي ملاذك للاسترخاء. الألوان الهادئة مثل <strong>الرمادي الفاتح، الأزرق الباهت، أو البيج الترابي</strong>
                        تساعد على تقليل التوتر وتحسين النوم.
                    </p>
                    <p className="mb-2">
                        🎨 اقتراح لون: <strong>Soft Grey – كود 0394</strong><br />
                    </p>
                    <p className="mb-6">
                        <img
                            src="/images/soft-grey-before-after.webp"
                            alt="Soft Grey – كود 0394"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>
                    <h2 className="text-xl font-semibold mt-8 mb-2">🛋️ لون الصالة: دفء واستقبال</h2>
                    <p className="mb-2">
                        الصالة هي القلب الاجتماعي للمنزل. الألوان الدافئة والمحايدة مثل <strong>البيج الدافئ، الرملي، أو درجات الخشب الفاتحة</strong>
                        تعزز شعور الترحيب.
                    </p>
                    <p className="mb-2">
                        🎨 اقتراح لون: <strong>Sand – كود 1140</strong><br />
                    </p>
                    <p className="mb-6">
                        <img
                            src="/images/sand-before-after.webp"
                            alt="Sand – كود 1140"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">🕌 لون المجلس: فخامة وهدوء</h2>
                    <p className="mb-2">
                        المجلس يعبر عن هوية المكان وكرم الضيافة. الألوان الغنية مثل <strong>الأخضر الزيتوني، الرمادي الداكن، أو الكحلي الملكي</strong>
                        تضيف طابعًا رسميًا وفاخرًا.
                    </p>
                    <p className="mb-2">
                        🎨 اقتراح لون: <strong>Evening Sky – كود 4863</strong><br />
                    </p>
                    <p className="mb-6">
                        <img
                            src="/images/eveningsky-before-after.webp"
                            alt="Evening Sky – كود 4863"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">🍳 لون المطبخ: نظافة وانتعاش</h2>
                    <p className="mb-2">
                        الألوان الفاتحة مثل <strong>الأبيض، الأخضر الفاتح، أو الأزرق النعناعي</strong> تجعل المطبخ يبدو نظيفًا وأوسع.
                    </p>
                    <p className="mb-2">
                        🎨 اقتراح لون: <strong>Minty Breeze – كود 7163</strong><br />
                    </p>
                    <p className="mb-6">
                        <p className="mb-6">
                            <img
                                src="/images/mintybreeze-before-after.webp"
                                alt="Minty Breeze – كود 7163"
                                width={768}
                                height={768}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </p>
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">📌 نصائح إضافية</h2>
                    <ul className="list-disc pl-6 mb-8">
                        <li>جرّب اللون على مساحة صغيرة أولًا قبل تعميمه.</li>
                        <li>استخدم إنارة LED بيضاء دافئة لرؤية اللون بشكل واقعي.</li>
                        <li>لا تعتمد على شاشة الجوال فقط، اطلب عينة حقيقية من اللون.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-2">📞 هل تحتاج للمساعدة؟</h2>
                    <p className='mb-8'>
                        احجز زيارة مجانية الآن لاختيار عينتك المناسبة وتجربة الألوان مباشرة على جدران منزلك.
                    </p>

                    <Link
                        to={`/${lang}/contact`}
                        className="bg-mfk-yellow text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center"
                    >
                        احجز زيارة مجانية الآن
                    </Link>
                </div>
            </section>
        </BlogLayout>
    );
};

export default RoomColors;