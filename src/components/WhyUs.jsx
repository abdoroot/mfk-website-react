'use client'
import { Link } from 'react-router-dom';
import useTranslation from "@/hooks/useTranslation";

const WhyUs = () => {
  const { t, lang } = useTranslation();
  const reasons = t('whyUs.reasons');
  const reasonsArray = Array.isArray(reasons) ? reasons : [];
  return (
    <section id="whyus" className="py-16 bg-mfk-yellow" dir={lang == 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-8 text-mfk-blue">
          {t('whyUs.title')}
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          {t('whyUs.description')}
        </p>

        <div className="mt-12">
          <ul className={lang == 'ar' ? 'text-right max-w-2xl mx-auto space-y-4' : 'text-left max-w-2xl mx-auto space-y-4'}>
            {reasonsArray.map((reason, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-mfk-blue text-2xl mt-1">•</span>
                <span className="text-gray-700 text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="text-white border bg-mfk-blue px-8 py-3 rounded-lg transition text-center"
          >
            {t('whyUs.ctaButton')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;