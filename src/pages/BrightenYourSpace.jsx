import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const BrightenYourSpace = () => {
    const { t, lang } = useTranslation();
    const tr = (ar, en) => (lang === 'ar' ? ar : en);
    return (
        <DefaultLayout>
            <Seo
                title={`${t('blogPages.brightenYourSpace.title')} - 5 Colors`}
                description={t('blogPages.brightenYourSpace.content')}
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        {tr(t('blogPages.brightenYourSpace.title'), '5 Colors to Make Spaces Feel Larger: Before & After Tips')}
                    </h1>

                    <p className="mb-6">
                        {tr(
                            'كثير من الناس يعانون من شعور ضيق في غرف منازلهم، خصوصًا الغرف الصغيرة أو ذات الإضاءة الضعيفة. لحسن الحظ، هناك مجموعة من الألوان الذكية التي تعطي إحساسًا بالاتساع وتفتح المساحة بصريًا. في هذا المقال، نشارك معك 5 ألوان فعالة، مع صور <strong>قبل وبعد</strong> ونصائح حول الإضاءة الطبيعية.',
                            'Many people feel cramped in small or poorly lit rooms. Luckily, some smart color choices can visually expand a space. Here we share five effective colors with before/after photos and tips on natural lighting.'
                        )}
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('1. الأبيض الناصع – الكلاسيكي الفعال','1. Pure White – the classic choice')}</h2>
                    <p className="mb-2">
                        {tr('اللون الأبيض يعكس الإضاءة ويمنح شعورًا بالنقاء والانفتاح. مثالي للجدران والأسقف، خصوصًا في المساحات الصغيرة.',
                        'White reflects light and creates a sense of purity and openness. It is perfect for walls and ceilings, especially in small rooms.')}
                    </p>
                    <p className="mb-4 text-blue-600 underline cursor-pointer">
                        🖼️ شاهد صورة قبل وبعد لغرفة مطلية بالأبيض
                        <img
                            src="/images/white-before-after.webp"
                            alt="صورة قبل وبعد لغرفة مطلية بالأبيض"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('2. الرمادي الفاتح – توازن مثالي','2. Light Grey – perfect balance')}</h2>
                    <p className="mb-2">
                        {tr('الرمادي الفاتح يعطي عمقًا للمكان بدون أن يكون داكنًا، ويعمل بشكل ممتاز مع الأثاث الخشبي أو المعدني.',
                        'Light grey adds depth without being too dark and pairs well with wooden or metal furniture.')}
                    </p>
                    <p className="mb-4 text-blue-600 underline cursor-pointer">
                        🖼️ صورة قبل وبعد: كيف فتح الرمادي الفاتح الصالة
                        <img
                            src="/images/lightgrey-before-after.webp"
                            alt="صورة قبل وبعد لغرفة مطلية الرمادي الفاتح"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('3. الأزرق السماوي – انتعاش وامتداد','3. Sky Blue – fresh and airy')}</h2>
                    <p className="mb-2">
                        {tr('الأزرق الفاتح أو السماوي يعطي إحساسًا بالهواء والانفتاح، خصوصًا في الغرف التي تحتوي على نوافذ كبيرة.',
                        'Light or sky blue gives a feeling of openness, especially in rooms with large windows.')}
                    </p>
                    <p className="mb-4 text-blue-600 underline cursor-pointer">
                        🖼️ شاهد تأثير اللون مع ضوء النهار الطبيعي
                        <img
                            src="/images/skyblue-before-after.webp"
                            alt="صورة قبل وبعد تأثير اللون مع ضوء النهار الطبيعي"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('4. البيج الدافئ – إحساس بالراحة والاتساع','4. Warm Beige – cozy and spacious')}</h2>
                    <p className="mb-2">
                        {tr('درجات البيج الفاتحة تعتبر مثالية لمن يبحث عن طابع دافئ وأنيق يوسع الغرفة دون أن تكون صارخة.',
                        'Light beige tones are perfect for a warm, elegant feel that visually enlarges the room without being overwhelming.')}
                    </p>
                    <p className="mb-4 text-blue-600 underline cursor-pointer">
                        🖼️ قبل وبعد: مقارنة بيج دافئ في غرفة معيشة
                        <img
                            src="/images/beige-before-after.webp"
                            alt="صورة قبل مقارنة بيج دافئ في غرفة معيشة"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">{tr('5. الأخضر النعناعي – لمسة ناعمة مع ضوء الشمس','5. Mint Green – soft with sunlight')}</h2>
                    <p className="mb-2">
                        {tr('لون حديث ومنعش يتفاعل بشكل رائع مع الضوء الطبيعي. يناسب المطابخ والحمامات.',
                        'A modern refreshing tone that pairs beautifully with natural light, perfect for kitchens and bathrooms.')}
                    </p>
                    <p className="mb-4 text-blue-600 underline cursor-pointer">
                        🖼️ مطبخ قبل وبعد بلون نعناعي مميز
                        <img
                            src="/images/mint-before-after.webp"
                            alt="صورة مطبخ قبل وبعد بلون نعناعي مميز"
                            width={768}
                            height={768}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">{tr('💡 تأثير الإضاءة الطبيعية','💡 Impact of Natural Light')}</h2>
                    <p className="mb-6">
                        {tr('مهما كان اللون الذي تختاره، الإضاءة الطبيعية تلعب دورًا كبيرًا في إبراز الإحساس بالاتساع. ننصح باستخدام الستائر الشفافة وعدم حجب الضوء في النهار.',
                        'Whatever color you choose, natural light greatly enhances the sense of space. Use sheer curtains and avoid blocking daylight.')}
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">{tr('📞 هل تحتاج مساعدة في اختيار الألوان؟','📞 Need help choosing colors?')}</h2>
                    <p className='mb-8'>
                        {tr('احجز زيارة معاينة الآن لتجربة الألوان المناسبة على جدران منزلك مباشرة. فريقنا يساعدك في تحقيق أفضل نتيجة.',
                        'Book a free visit to test colors directly on your walls. Our team will help you achieve the best result.')}
                    </p>
                    <p className="mb-4">
                        {tr(
                            <>تعرف أيضًا على <Link to={`/${lang}/room-colors`} className="text-mfk-blue underline">أفضل الألوان لكل غرفة</Link>.</>,
                            <>See also <Link to={`/${lang}/room-colors`} className="text-mfk-blue underline">best colors for each room</Link>.</>
                        )}
                    </p>
                    <p className="mb-8">
                        {tr(
                            <>اقرأ دليل <Link to={`/${lang}/lighting-and-color`} className="text-mfk-blue underline">تأثير الإضاءة على اللون</Link>.</>,
                            <>Check the <Link to={`/${lang}/lighting-and-color`} className="text-mfk-blue underline">lighting and color guide</Link>.</>
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

export default BrightenYourSpace;
