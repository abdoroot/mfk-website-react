'use client'
import useTranslation from '@/hooks/useTranslation';

const testimonials = [
    {
        name: 'شيخة',
        comment: 'صبغوا لي الغرف بطريقة احترافية، وكل شي نظيف بعد ما خلصوا'
    },
    {
        name: 'Sadk Abdo',
        comment: 'شغل جيد جداً.وأشكركم على حسن المعامله والالتزام بالميعاد'
    },
    {
        name: 'عبدالله الشامسي',
        comment: 'تعامل راقٍ وأسعار مناسبة، والله ارتحت بعد ما جربت خدماتهم.'
    },
    {
        name: 'ناصر',
        comment: 'أول مرة أجربهم، بس أكيد مب آخر مرة. خدمة ممتازة ومصداقية عالية'
    },
    {
        name: 'فريد شهاب',
        comment: 'افضل شركة صيانة عملكم فوق الرائع من الشرف لي التعامل معكم'
    },
    {
        name: 'Ahmed Elbadry',
        comment: 'شركه فنيه وعماله ممتازه ومواعيد مضبوطه بارك الله فيهم'
    }
];

const Testimonial = () => {
    const { t } = useTranslation();
    return (
        <section id="testimonials" className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-10">{t("testimonial.title")}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="italic text-gray-700">"{testimonial.comment}"</p>
                            <p className="mt-4 font-semibold text-blue-600">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-12 text-lg text-gray-600 items-center justify-center">
                    <span className="text-red-500 mx-2">❤</span>
                    {t("testimonial.more_customers")}
                </p>
            </div>
        </section>
    );
};

export default Testimonial;