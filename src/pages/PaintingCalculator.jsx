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
  const [area, setArea] = useState(0);

  const progressSteps = [
    { number: 1, label: t('calculator.progress.room') },
    { number: 2, label: t('calculator.progress.wall') },
    { number: 3, label: t('calculator.progress.colors') },
    { number: 4, label: t('calculator.progress.paint') },
    { number: 5, label: t('calculator.progress.result') }
  ];

  const roomLabel =
    roomType && roomType !== 'custom'
      ? `${t('calculator.rooms.' + roomType)} (${area} m²)`
      : roomType === 'custom' && length && width
      ? `${length}m x ${width}m (${area} m²)`
      : '';
  const wallLabel = t(`calculator.wall.${wallCondition.replace('_cracks','')}`);
  const colorsLabel = t(
    `calculator.colors.${
      colors === '1' ? 'one' : colors === '2' ? 'two' : colors === '3+' ? 'more' : 'help'
    }`
  );
  const qualityLabel = t(`calculator.quality.${quality}`);

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
    setArea(area);
    setResult(total);
  };

  return (
    <DefaultLayout>
      <Seo title="حاسبة تكلفة الدهان - Painting Cost Calculator" />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-mfk-blue mb-6 text-center">{t('calculator.title')}</h2>
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {progressSteps.map(s => (
            <div
              key={s.number}
              className={`flex items-center gap-2 px-3 py-1 rounded-full ${step >= s.number ? 'bg-mfk-blue text-white' : 'bg-gray-300 text-gray-500'}`}
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-current">{s.number}</span>
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-6 max-w-lg mx-auto pb-20">
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
              <div className="flex justify-end mt-4 md:static fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:border-0">
                <button onClick={()=>setStep(2)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
              <p className="text-center text-sm mt-16 md:mt-4">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="underline text-mfk-blue">
                  {t('calculator.skip')}
                </a>
              </p>
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
              <div className="flex justify-between mt-4 md:static fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:border-0">
                <button onClick={()=>setStep(1)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={()=>setStep(3)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
              <p className="text-center text-sm mt-16 md:mt-4">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="underline text-mfk-blue">
                  {t('calculator.skip')}
                </a>
              </p>
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
              {colors === '3+' && (
                <p className="text-red-600 text-sm mt-2">{t('calculator.note_more_colors')}</p>
              )}
              <div className="flex justify-between mt-4 md:static fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:border-0">
                <button onClick={()=>setStep(2)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={()=>setStep(4)} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.next')}</button>
              </div>
              <p className="text-center text-sm mt-16 md:mt-4">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="underline text-mfk-blue">
                  {t('calculator.skip')}
                </a>
              </p>
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
              <div className="flex justify-between mt-4 md:static fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:border-0">
                <button onClick={()=>setStep(3)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
                <button onClick={()=>{calculate(); setStep(5);}} className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-2 rounded-md">{t('calculator.calculate')}</button>
              </div>
              <p className="text-center text-sm mt-16 md:mt-4">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="underline text-mfk-blue">
                  {t('calculator.skip')}
                </a>
              </p>
            </div>
          )}

          {step === 5 && result !== null && (
            <div>
              <div className="text-center mt-6 space-y-4">
                <p className="text-xl font-semibold">{t('calculator.estimated')} {result.toFixed(2)} AED</p>
                <div className="text-sm space-y-1">
                  <p>{t('calculator.summary.room')}: {roomLabel}</p>
                  <p>{t('calculator.summary.wall')}: {wallLabel}</p>
                  <p>{t('calculator.summary.colors')}: {colorsLabel}</p>
                  <p>{t('calculator.summary.paint')}: {qualityLabel}</p>
                </div>
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md inline-block">
                  {t('calculator.send_whatsapp')}
                </a>
              </div>
              <div className="flex justify-between mt-4 md:static fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:border-0">
                <button onClick={()=>setStep(4)} className="border px-4 py-2 rounded">{t('calculator.back')}</button>
              </div>
              <p className="text-center text-sm mt-16 md:mt-4">
                <a href="https://wa.me/971508191635" target="_blank" rel="noopener noreferrer" className="underline text-mfk-blue">
                  {t('calculator.skip')}
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PaintingCalculator;
