import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const RoomColors = () => {
    const { t, lang } = useTranslation();
    const tr = (ar, en) => (lang === 'ar' ? ar : en);
    return (
        <DefaultLayout>
            <Seo
                title={`${t('blogPages.roomColors.title')} - Best Colors`}
                description={t('blogPages.roomColors.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        {tr(t('blogPages.roomColors.title'), 'Best colors for every room: practical guide with before & after')}
                    </h1>

                    <p className="mb-4">
                        {tr(
                            'هل تبحث عن تغيير ألوان منزلك لكنك محتار في اختيار اللون المناسب لكل غرفة؟ في هذا المقال، نقدم لك دليلًا عمليًا لاختيار <strong>أفضل لون لغرفة النوم، الصالة، المجلس، والمطبخ</strong>. بالإضافة إلى روابط مباشرة لألوان مميزة من دهانات شهيرة مثل <strong>جوتن</strong>، وصور "قبل وبعد" لتساعدك على التخيل، ونصائح من خبراء الدهانات في الخليج.',
                            'Thinking of repainting but not sure which color suits each room? This guide helps you pick the best shade for the bedroom, living room, majlis and kitchen. You will find direct links to popular Jotun colors, before/after photos to visualize the result, and tips from Gulf paint experts.'
                        )}
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('🛏️ لون غرفة النوم: راحة وهدوء','🛏️ Bedroom Colors: Relaxation and Calm')}</h2>
                    <p className="mb-2">
                        {tr(
                            'غرفة النوم هي ملاذك للاسترخاء. الألوان الهادئة مثل <strong>الرمادي الفاتح، الأزرق الباهت، أو البيج الترابي</strong> تساعد على تقليل التوتر وتحسين النوم.',
                            'Your bedroom is a place to unwind. Soft shades like <strong>light grey, pale blue or earthy beige</strong> help reduce stress and improve sleep.'
                        )}
                    </p>
                    <p className="mb-2">
                        {tr('🎨 اقتراح لون: <strong>Soft Grey – كود 0394</strong><br />','🎨 Suggested color: <strong>Soft Grey – code 0394</strong><br />')}
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
                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('🛋️ لون الصالة: دفء واستقبال','🛋️ Living Room: Warmth and Welcome')}</h2>
                    <p className="mb-2">
                        {tr(
                            'الصالة هي القلب الاجتماعي للمنزل. الألوان الدافئة والمحايدة مثل <strong>البيج الدافئ، الرملي، أو درجات الخشب الفاتحة</strong> تعزز شعور الترحيب.',
                            'The living room is the social heart of the house. Warm neutrals like <strong>warm beige, sandy tones or light wood shades</strong> create a welcoming feel.'
                        )}
                    </p>
                    <p className="mb-2">
                        {tr('🎨 اقتراح لون: <strong>Sand – كود 1140</strong><br />','🎨 Suggested color: <strong>Sand – code 1140</strong><br />')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('🕌 لون المجلس: فخامة وهدوء','🕌 Majlis Colors: Luxury and Calm')}</h2>
                    <p className="mb-2">
                        {tr(
                            'المجلس يعبر عن هوية المكان وكرم الضيافة. الألوان الغنية مثل <strong>الأخضر الزيتوني، الرمادي الداكن، أو الكحلي الملكي</strong> تضيف طابعًا رسميًا وفاخرًا.',
                            'The majlis reflects hospitality. Rich tones like <strong>olive green, dark gray or royal navy</strong> give a formal luxurious touch.'
                        )}
                    </p>
                    <p className="mb-2">
                        {tr('🎨 اقتراح لون: <strong>Evening Sky – كود 4863</strong><br />','🎨 Suggested color: <strong>Evening Sky – code 4863</strong><br />')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('🍳 لون المطبخ: نظافة وانتعاش','🍳 Kitchen Colors: Clean and Fresh')}</h2>
                    <p className="mb-2">
                        {tr(
                            'الألوان الفاتحة مثل <strong>الأبيض، الأخضر الفاتح، أو الأزرق النعناعي</strong> تجعل المطبخ يبدو نظيفًا وأوسع.',
                            'Light shades like <strong>white, light green or minty blue</strong> make the kitchen appear cleaner and more spacious.'
                        )}
                    </p>
                    <p className="mb-2">
                        {tr('🎨 اقتراح لون: <strong>Minty Breeze – كود 7163</strong><br />','🎨 Suggested color: <strong>Minty Breeze – code 7163</strong><br />')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('📌 نصائح إضافية','📌 Extra Tips')}</h2>
                    <ul className="list-disc pl-6 mb-8">
                        {tr(
                            '<li>جرّب اللون على مساحة صغيرة أولًا قبل تعميمه.</li><li>استخدم إنارة LED بيضاء دافئة لرؤية اللون بشكل واقعي.</li><li>لا تعتمد على شاشة الجوال فقط، اطلب عينة حقيقية من اللون.</li>',
                            '<li>Test the color on a small area first.</li><li>Use warm white LED lights to view the color accurately.</li><li>Do not rely solely on your phone screen; get a real sample.</li>'
                        )}
                    </ul>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('📞 هل تحتاج للمساعدة؟','📞 Need help?')}</h2>
                    <p className='mb-8'>
                        {tr('احجز زيارة مجانية الآن لاختيار عينتك المناسبة وتجربة الألوان مباشرة على جدران منزلك.',
                        'Book a free visit to test samples directly on your walls.')}
                    </p>
                    <p className="mb-4">
                        {tr(
                            <>للمزيد حول تأثير الإضاءة <Link to={`/${lang}/lighting-and-color`} className="text-mfk-blue underline">اضغط هنا</Link>.</>,
                            <>For lighting effects see <Link to={`/${lang}/lighting-and-color`} className="text-mfk-blue underline">this guide</Link>.</>
                        )}
                    </p>
                    <p className="mb-8">
                        {tr(
                            <>شاهد أيضًا <Link to={`/${lang}/brighten-your-space`} className="text-mfk-blue underline">5 ألوان تعطي وسع للمكان</Link>.</>,
                            <>Also read <Link to={`/${lang}/brighten-your-space`} className="text-mfk-blue underline">5 Colors That Broaden Spaces</Link>.</>
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

export default RoomColors;