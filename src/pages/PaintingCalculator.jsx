import { useState } from 'react';
import DefaultLayout from '@/layouts/DefaultLayout';
import useTranslation from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import data from '@/data/paintingCalculator.json';

const PaintingCalculator = () => {
  const { t } = useTranslation();
  const [roomType, setRoomType] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [wallCondition, setWallCondition] = useState('excellent');
  const [colors, setColors] = useState('1');
  const [quality, setQuality] = useState('luxury');
  const [result, setResult] = useState(null);

  const calculate = () => {
    let area = 0;
    if (roomType && roomType !== 'custom') {
      const selected = data.roomTypes.find(r => r.value === roomType);
      area = selected ? selected.area : 0;
    } else if (length && width) {
      area = parseFloat(length) * parseFloat(width);
    }
    const basePrice = area * data.basePricePerSquareMeter;
    const wallExtra = data.wallConditions[wallCondition] || 0;
    const qualityPrice = data.paintQuality[quality] || 0;
    const multiplier = data.colorsMultiplier[colors] || 1;
    const total = (basePrice + wallExtra + qualityPrice) * multiplier;
    setResult(total);
  };

  return (
    <DefaultLayout>
      <Seo title="\u062d\u0627\u0633\u0628\u0629 \u0627\u0644\u062f\u0647\u0627\u0646 - Painting Calculator" />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-mfk-blue mb-6 text-center">{t('calculator.title')}</h2>
        <div className="space-y-6 max-w-lg mx-auto">
          <div>
            <label className="block mb-2 font-medium">{t('calculator.step1')}</label>
            <select
              value={roomType}
              onChange={(e)=>setRoomType(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">{t('calculator.select')}</option>
              {data.roomTypes.map(rt => (
                <option key={rt.value} value={rt.value}>{rt.label}</option>
              ))}
              <option value="custom">{t('calculator.custom')}</option>
            </select>
            {roomType === 'custom' && (
              <div className="flex gap-2 mt-2">
                <input
                  type="number"
                  value={length}
                  onChange={(e)=>setLength(e.target.value)}
                  placeholder={t('calculator.length')}
                  className="w-1/2 border rounded p-2"
                />
                <input
                  type="number"
                  value={width}
                  onChange={(e)=>setWidth(e.target.value)}
                  placeholder={t('calculator.width')}
                  className="w-1/2 border rounded p-2"
                />
              </div>
            )}
            <div className="mt-2">
              <a href="https://wa.me/971508191635" target="_blank" className="text-mfk-blue underline" rel="noopener noreferrer">
                {t('calculator.whatsapp')}
              </a>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">{t('calculator.step2')}</label>
            <select
              value={wallCondition}
              onChange={(e)=>setWallCondition(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="excellent">{t('calculator.wall.excellent')}</option>
              <option value="good">{t('calculator.wall.good')}</option>
              <option value="minor_cracks">{t('calculator.wall.minor')}</option>
              <option value="major_cracks">{t('calculator.wall.major')}</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">{t('calculator.step3')}</label>
            <select
              value={colors}
              onChange={(e)=>setColors(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="1">{t('calculator.colors.one')}</option>
              <option value="2">{t('calculator.colors.two')}</option>
              <option value="3+">{t('calculator.colors.more')}</option>
              <option value="help">{t('calculator.colors.help')}</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">{t('calculator.step4')}</label>
            <select
              value={quality}
              onChange={(e)=>setQuality(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="luxury">{t('calculator.quality.luxury')}</option>
              <option value="standard">{t('calculator.quality.standard')}</option>
            </select>
          </div>

          <button
            onClick={calculate}
            className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-3 rounded-md w-full"
          >
            {t('calculator.calculate')}
          </button>

          {result !== null && (
            <div className="text-center mt-6 space-y-4">
              <p className="text-xl font-semibold">
                {t('calculator.estimated')} {result.toFixed(2)} AED
              </p>
              <a
                href="https://wa.me/971508191635"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-block"
              >
                {t('calculator.send_whatsapp')}
              </a>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PaintingCalculator;
