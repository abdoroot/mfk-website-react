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
  const [step, setStep] = useState(1);

  const calculate = () => {
    let area = 0;
    if (roomType && roomType !== 'custom') {
      const selected = data.roomTypes.find(r => r.key === roomType);
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
      <Seo title="حاسبة تكلفة الدهان - Painting Cost Calculator" />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-mfk-blue mb-6 text-center">{t('calculator.title')}</h2>
        <div className="flex justify-center gap-2 mb-6">
          {[1,2,3,4].map(n => (
            <div key={n} className={`w-8 h-8 rounded-full flex items-center justify-center ${step>=n ? 'bg-mfk-blue text-white' : 'bg-gray-300 text-gray-500'}`}>{n}</div>
          ))}
        </div>
        <div className="space-y-6 max-w-lg mx-auto">
          {step === 1 && (
            <div>
              <label className="block mb-2 font-medium">{t('calculator.step1')}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {data.roomTypes.map(rt => (
                  <button
                    key={rt.key}
                    onClick={() => setRoomType(rt.key)}
                    className={`border rounded p-2 ${roomType===rt.key ? 'bg-mfk-blue text-white' : 'bg-white'}`}
                  >
                    {t(`calculator.rooms.${rt.key}`)}
                  </button>
                ))}
                <button
                  onClick={() => setRoomType('custom')}
                  className={`border rounded p-2 ${roomType==='custom' ? 'bg-mfk-blue text-white' : 'bg-white'}`}
                >
                  {t('calculator.custom')}
                </button>
              </div>
              {roomType === 'custom' && (
                <div className="flex gap-2 mt-2">
                  <input type="number" value={length} onChange={e=>setLength(e.target.value)} placeholder={t('calculator.length')} className="w-1/2 border rounded p-2" />
                  <input type="number" value={width} onChange={e=>setWidth(e.target.value)} placeholder={t('calculator.width')} className="w-1/2 border rounded p-2" />
                </div>
              )}
              <div className="mt-2">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="text-mfk-blue underline">
                  {t('calculator.whatsapp')}
                </a>
              </div>
              <div className="flex justify-end mt-4">
                <button onClick={()=>setStep(2)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="block mb-2 font-medium">{t('calculator.step2')}</label>
              <div className="grid grid-cols-2 gap-2">
                {['excellent','good','minor_cracks','major_cracks'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setWallCondition(opt)}
                    className={`border rounded p-2 ${wallCondition===opt ? 'bg-mfk-blue text-white' : 'bg-white'}`}
                  >
                    {t(`calculator.wall.${opt.replace('_cracks','')}`)}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={()=>setStep(1)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={()=>setStep(3)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <label className="block mb-2 font-medium">{t('calculator.step3')}</label>
              <div className="grid grid-cols-2 gap-2">
                {['1','2','3+','help'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setColors(opt)}
                    className={`border rounded p-2 ${colors===opt ? 'bg-mfk-blue text-white' : 'bg-white'}`}
                  >
                    {t(`calculator.colors.${opt==='1'?'one':opt==='2'?'two':opt==='3+'?'more':'help'}`)}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={()=>setStep(2)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={()=>setStep(4)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <label className="block mb-2 font-medium">{t('calculator.step4')}</label>
              <div className="grid grid-cols-2 gap-2">
                {['luxury','standard'].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setQuality(opt)}
                    className={`border rounded p-2 ${quality===opt ? 'bg-mfk-blue text-white' : 'bg-white'}`}
                  >
                    {t(`calculator.quality.${opt}`)}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button onClick={()=>setStep(3)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={calculate} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.calculate')}</button>
              </div>
              {result !== null && (
                <div className="text-center mt-6 space-y-4">
                  <p className="text-xl font-semibold">{t('calculator.estimated')} {result.toFixed(2)} AED</p>
                  <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-block">
                    {t('calculator.send_whatsapp')}
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PaintingCalculator;
