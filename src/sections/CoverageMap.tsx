import coverageMapImage from '../assets/images/kzmap.png';
import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';

type CoverageMapProps = {
  language: Language;
};

export function CoverageMap({ language }: CoverageMapProps) {
  const content = translations[language].coverageMap;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 md:px-6 lg:grid-cols-[0.75fr_1.4fr_0.85fr] lg:gap-6 lg:px-8">
        <div className="lg:pb-8">
          <h2 className="max-w-[10ch] text-4xl font-black uppercase leading-[0.94] tracking-[-0.06em] text-brand.black md:text-5xl lg:text-[3.7rem]">
            {content.title}
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={coverageMapImage}
            alt="Карта покрытия по Казахстану"
            className="h-auto w-full max-w-[780px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex items-start gap-4 lg:justify-self-end lg:pt-4">
          <span className="mt-3 h-1 w-10 shrink-0 rounded-full bg-brand.yellow" />
          <p className="max-w-[18rem] text-lg font-medium leading-7 text-black/70 md:text-xl">
            {content.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}