import BlogLayout from '@/layouts/BlogLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Jotun2025Colors = () => {
    const { lang, t } = useTranslation();
    const [image, setImage] = useState('');

    return (
        <BlogLayout>
            <Seo
                title="كتالوج جوتن 2025 - مجموعة ألوان تناغم"
                description="اكتشف كتالوج جوتن 2025 الجديد، مجموعة تناغم التي تضم أكثر من 30 درجة لونية موزعة على 6 عائلات ألوان: البيج، الخوخي، الرمادي، الأزرق، الأخضر، الأصفر."
            />
            <section className="py-16 bg-mfk-blue/5">
                <div className="container mx-auto px-4 max-w-4xl text-gray-800 leading-relaxed">
                    <h1 className="text-3xl font-bold text-mfk-blue mb-6 text-center">
                        كتالوج جوتن 2025: مجموعة ألوان "تناغم"
                    </h1>

                    <p className="mb-6">
                        هل تبحث عن أحدث ألوان دهانات جوتن لعام 2025؟ مجموعة "تناغم" الجديدة من جوتن تضم أكثر من 30 لونًا موزعة على 6 عائلات لونية: البيج، الخوخي، الرمادي، الأزرق، الأخضر، الأصفر. في هذا المقال نستعرض أبرز هذه الألوان، وكيفية استخدامها في منزلك، مع نصائح عملية لاختيار اللون المناسب لكل غرفة.
                    </p>

                    <p className="mb-6">
                        تحتفي مجموعة "تناغم" الجديدة من جوتن بأثر التفاصيل الصغيرة وتنوع الظلال اللونية الهادئة التي تخلق جوًا متناغمًا ومريحًا في المنزل. تضم أكثر من 30 لونًا موزعة على ست فئات: الأزرق، الرمادي، الخوخي، الأصفر، البيج، والأخضر.
                    </p>

                    <p className="mb-6">
                        وفقًا لمديرة الألوان العالمية في جوتن، ليزبيث لارسن، فإن الألوان لا تحتاج إلى أن تكون صارخة لتحدث تأثيرًا عاطفيًا. يكفي فرق بسيط في الظل ليغيّر الحالة المزاجية ويمنح إحساسًا جديدًا.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🎨 درجات البيج: دفء وراحة</h2>
                    <p className="mb-4">
                        استخدم ألوان مثل <strong>JOTUN 1931 Cashew</strong>، <strong>Sandbeige 1939</strong> و<strong>Rural 12085</strong> لتصميم غرف نوم أو معيشة دافئة وهادئة.
                    </p>

                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/p1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">كاشو 1931</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/p2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ويلد ايرل 1876</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/p3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ساند بيج 1939</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/p4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">شايد 11130</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/p5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">رورل 12085</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🌸 درجات الخوخي: طبيعية وأنيقة</h2>
                    <p className="mb-4">
                        ألوان مثل <strong>Peachy 12074</strong> و<strong>Muted Coral 20217</strong> تمنح جدران منزلك طابعًا ترابيًا وحيويًا بدون مبالغة.
                    </p>

                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/pe1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">بيتش سكاي 1117</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/pe2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">شمس 10411</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/pe3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">بيتشي 12074</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/pe4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ادفنشر 11175</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/pe5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ميوتد كورال 20217</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">☀️ درجات الأصفر: إشراق ودفء</h2>
                    <p className="mb-4">
                        أضف لمسة مشرقة باستخدام <strong>Malmo 8124</strong> أو <strong>Forest Light 11228</strong>. هذه الألوان مناسبة للمداخل والمطابخ.
                    </p>
                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/y1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">مالمو 8124</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/y2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">فوريست لايت 11228</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/y3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ارثي يلو 8583</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/y4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">كاكي يلو 8625</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/y5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">ملو 20162</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🌿 درجات الأخضر: إحساس بالطبيعة</h2>
                    <p className="mb-4">
                        ألوان مثل <strong>Secret Green 7718</strong> و<strong>Pistachio 7386</strong> تمنحك أجواء طبيعية مريحة ويمكن دمجها مع لمسات خشبية أو بيضاء.
                    </p>
                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/gr1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">سيكرت غرين 7718</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/gr2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> بيستاشيو 7386</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/gr3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">أفوكادو غرين 0470</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/gr4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">سايبرس 7040</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/gr5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> فري سبيريت 5489</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🌫️ درجات الرمادي: حيادية أنيقة</h2>
                    <p className="mb-4">
                        الرمادي مثل <strong>Comfort Grey 12078</strong> و<strong>Silky Blue 4666</strong> يعزز الإحساس بالهدوء ويُستخدم كثيرًا في المكاتب المنزلية.
                    </p>
                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/g1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">غراي تتش  12314</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/g2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> تشينو 0553</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/g3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> كومفورت غراي  12078</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/g4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> تندر جريج 12306</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/g5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">سيلكي بلو 4666</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">🌊 درجات الأزرق: انتعاش بصري</h2>
                    <p className="mb-4">
                        اختر من <strong>Spring Breeze 6167</strong> أو <strong>Sea Mist 6253</strong> لإحساس يشبه نسمات البحر.
                    </p>
                    <div className='overflow-x-auto flex space-x-4 py-4'>
                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/b1.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> سبرينج بريز 6167</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/b2.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> سي ميست 6253</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/b3.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">  دارجيلينغ  6236</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/b4.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold">  أثينيان بلو 6128</p>
                        </div>

                        <div className="flex-shrink-0 w-2/3 sm:w-1/3 text-right">
                            <img
                                src="/images/colors/b5.png"
                                className="w-full rounded shadow"
                                loading="lazy"
                                alt="p1 color"
                            />
                            <p className="mt-2 text-sm font-semibold"> ساني غرين 8596</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-2">💡 كيف تستخدم مجموعة الألوان؟</h2>
                    <p className="mb-4">
                        يمكنك الدمج أفقيًا بين درجات اللون نفسه لخلق تناغم، أو رأسيًا لمزج تدرجات ذات قوة متشابهة. الألوان البارزة مثل Muted Coral أو Free Spirit تضيف لمسة شخصية فريدة.
                    </p>

                    <p className="mb-6">
                        تم تطوير كل وصفة لونية داخل مختبرات جوتن وفق أعلى معايير الجودة، مع ضمان الثبات والتغطية الممتازة تحت ظروف الإضاءة المختلفة.
                    </p>

                    <h2 className="text-xl font-semibold mt-8 mb-8"> حمل الكتالوج الآن</h2>
                    <p className="mb-6">
                        <a href='/documents/jotun_gcc2025_meia-english-arabic-issuu.pdf' className="border border-mfk-blue text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center">تحميل كاتلوج جوتن 2025 📩</a>
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-2">📞 هل تحتاج مساعدة في اختيار الألوان؟</h2>
                    <p className='mb-8'>
                        احجز زيارة معاينة الآن لتجربة الألوان المناسبة على جدران منزلك مباشرة. فريقنا يساعدك في تحقيق أفضل نتيجة.
                    </p>

                    <div>
                        <Link
                            to={`/${lang}/contact`}
                            className="bg-mfk-yellow text-mfk-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition text-center"
                        >
                            احجز زيارة مجانية الآن
                        </Link>
                    </div>
                </div>
            </section>
        </BlogLayout>
    );
};

export default Jotun2025Colors;
