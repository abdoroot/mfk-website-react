import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { Link } from 'react-router-dom';

const BrightenYourSpace = () => {
    const { t, lang } = useTranslation();
    return (
        <DefaultLayout>
            <Seo
                title="5 ألوان تعطي وسع للمكان - أفضل الألوان للمساحات الصغيرة"
                description="ألوان تجعل المكان أوسع بصريًا مع صور قبل وبعد وتأثير الإضاءة الطبيعية"
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        {lang === 'ar'
                            ? '5 ألوان تعطي وسع للمكان: قبل وبعد وتوجيهات عملية'
                            : '5 Colors to Make Spaces Feel Larger: Practical Tips'}
                    </h1>

                    <p className="mb-6">
                        {lang === 'ar'
                            ? 'كثير من الناس يعانون من شعور ضيق في غرف منازلهم، خصوصًا الغرف الصغيرة أو ذات الإضاءة الضعيفة. لحسن الحظ، هناك مجموعة من الألوان الذكية التي تعطي إحساسًا بالاتساع وتفتح المساحة بصريًا. في هذا المقال، نشارك معك 5 ألوان فعالة، مع صور \u003cstrong\u003eقبل وبعد\u003c/strong\u003e ونصائح حول الإضاءة الطبيعية.'
                            : t('blogArticles.brightenYourSpace.intro')}
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-2">
                        {lang === 'ar'
                            ? '1. الأبيض الناصع – الكلاسيكي الفعال'
                            : t('blogArticles.brightenYourSpace.whiteTitle')}
                    </h2>
                    <p className="mb-2">
                        {lang === 'ar'
                            ? 'اللون الأبيض يعكس الإضاءة ويمنح شعورًا بالنقاء والانفتاح. مثالي للجدران والأسقف، خصوصًا في المساحات الصغيرة.'
                            : t('blogArticles.brightenYourSpace.whiteParagraph')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">
                        {lang === 'ar'
                            ? '2. الرمادي الفاتح – توازن مثالي'
                            : t('blogArticles.brightenYourSpace.greyTitle')}
                    </h2>
                    <p className="mb-2">
                        {lang === 'ar'
                            ? 'الرمادي الفاتح يعطي عمقًا للمكان بدون أن يكون داكنًا، ويعمل بشكل ممتاز مع الأثاث الخشبي أو المعدني.'
                            : t('blogArticles.brightenYourSpace.greyParagraph')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">
                        {lang === 'ar'
                            ? '3. الأزرق السماوي – انتعاش وامتداد'
                            : t('blogArticles.brightenYourSpace.blueTitle')}
                    </h2>
                    <p className="mb-2">
                        {lang === 'ar'
                            ? 'الأزرق الفاتح أو السماوي يعطي إحساسًا بالهواء والانفتاح، خصوصًا في الغرف التي تحتوي على نوافذ كبيرة.'
                            : t('blogArticles.brightenYourSpace.blueParagraph')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">
                        {lang === 'ar'
                            ? '4. البيج الدافئ – إحساس بالراحة والاتساع'
                            : t('blogArticles.brightenYourSpace.beigeTitle')}
                    </h2>
                    <p className="mb-2">
                        {lang === 'ar'
                            ? 'درجات البيج الفاتحة تعتبر مثالية لمن يبحث عن طابع دافئ وأنيق يوسع الغرفة دون أن تكون صارخة.'
                            : t('blogArticles.brightenYourSpace.beigeParagraph')}
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

                    <h2 className="text-xl font-semibold mt-8 mb-2">
                        {lang === 'ar'
                            ? '5. الأخضر النعناعي – لمسة ناعمة مع ضوء الشمس'
                            : t('blogArticles.brightenYourSpace.mintTitle')}
                    </h2>
                    <p className="mb-2">
                        {lang === 'ar'
                            ? 'لون حديث ومنعش يتفاعل بشكل رائع مع الضوء الطبيعي. يناسب المطابخ والحمامات.'
                            : t('blogArticles.brightenYourSpace.mintParagraph')}
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

                    <h2 className="text-xl font-semibold mt-10 mb-2">
                        {lang === 'ar' ? '💡 تأثير الإضاءة الطبيعية' : t('blogArticles.brightenYourSpace.lightingTitle')}
                    </h2>
                    <p className="mb-6">
                        {lang === 'ar'
                            ? 'مهما كان اللون الذي تختاره، الإضاءة الطبيعية تلعب دورًا كبيرًا في إبراز الإحساس بالاتساع. ننصح باستخدام الستائر الشفافة وعدم حجب الضوء في النهار.'
                            : t('blogArticles.brightenYourSpace.lightingParagraph')}
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">
                        {lang === 'ar' ? '📞 هل تحتاج مساعدة في اختيار الألوان؟' : t('blogArticles.brightenYourSpace.ctaTitle')}
                    </h2>
                    <p className='mb-8'>
                        {lang === 'ar'
                            ? 'احجز زيارة معاينة الآن لتجربة الألوان المناسبة على جدران منزلك مباشرة. فريقنا يساعدك في تحقيق أفضل نتيجة.'
                            : t('blogArticles.brightenYourSpace.ctaParagraph')}
                    </p>

                    <p className='mb-6'>
                        {lang === 'ar' ? (
                            <>
                                تعرف على المزيد حول&nbsp;
                                <Link to={`/${lang}/lighting-and-color`} className='text-mfk-blue underline'>
                                    الإضاءة والألوان
                                </Link>
                                &nbsp;أو تصفح&nbsp;
                                <Link to={`/${lang}/room-colors`} className='text-mfk-blue underline'>
                                    أفضل الألوان لكل غرفة
                                </Link>
                                .
                            </>
                        ) : (
                            <>
                                Learn more about&nbsp;
                                <Link to={`/${lang}/lighting-and-color`} className='text-mfk-blue underline'>
                                    {t('header.lightingAndColor')}
                                </Link>
                                &nbsp;or explore&nbsp;
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

export default BrightenYourSpace;
