import coverageMapImage from '../assets/images/kzmap.png';
import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';

type CoverageMapProps = {
  language: Language;
};

export function CoverageMap({ language }: CoverageMapProps) {
  const content = translations[language].coverageMap;

  return (
    <section className="bg-brand.gray py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-brand.black/65">
            Kazakhstan coverage
          </p>
          <h2 className="max-w-[12ch] text-4xl font-black uppercase leading-[0.96] tracking-[-0.05em] text-brand.black md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-[34rem] text-base font-medium leading-7 text-black/70 md:text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-4 shadow-[0_18px_40px_rgba(17,17,17,0.08)] md:p-6">
          <img
            src={coverageMapImage}
            alt="Карта покрытия по Казахстану"
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}