import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';
import { processSteps } from '../data/landingSectionsData';
import requestIcon from '../assets/images/blackicons/phone.png';
import selectionIcon from '../assets/images/blackicons/excalator.png';
import agreeIcon from '../assets/images/blackicons/handshake.png';
import dispatchIcon from '../assets/images/blackicons/delivery.png';

const stepIcons: Record<string, string> = {
  request: requestIcon,
  selection: selectionIcon,
  agree: agreeIcon,
  dispatch: dispatchIcon,
};

type HowWeWorkProps = {
  language: Language;
};

export function HowWeWork({ language }: HowWeWorkProps) {
  const content = translations[language].process;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-brand.black md:text-5xl">
          {content.title}
        </h2>

        <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processSteps.map((step, index) => {
            const iconSrc = stepIcons[step.id];

            return (
              <div key={step.id} className="relative">
                {index < processSteps.length - 1 ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-12px] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-brand.black">
                      <path d="M5 12h13" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : null}

                <article className="relative flex h-full min-h-[240px] flex-col items-center rounded-[22px] bg-[#F7F7F7] px-5 pb-7 pt-7 text-center shadow-[0_10px_24px_rgba(17,17,17,0.06)] ring-1 ring-black/5 sm:min-h-[250px]">
                  <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-black shadow-[0_2px_0_rgba(0,0,0,0.1)]">
                    <span className="text-[24px] font-black leading-none">{step.number}</span>
                  </div>

                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="mt-4 h-40 w-40 object-contain sm:h-44 sm:w-44 md:h-48 md:w-48"
                  />

                  <p className="mt-4 max-w-[12rem] text-[15px] font-extrabold uppercase leading-6 tracking-[-0.02em] text-brand.black sm:text-base">
                    {language === 'ru' ? step.ruLabel : step.kzLabel}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}