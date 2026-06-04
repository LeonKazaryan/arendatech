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

        <div className="relative mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
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

                <article className="relative flex h-full min-h-[228px] flex-col items-center rounded-[20px] bg-[#F7F7F7] px-3 pb-5 pt-5 text-center shadow-[0_10px_24px_rgba(17,17,17,0.06)] ring-1 ring-black/5 sm:min-h-[290px] sm:px-5 sm:pb-7 sm:pt-7">
                  <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-[10px] bg-brand-yellow text-brand-black shadow-[0_2px_0_rgba(0,0,0,0.1)] sm:left-4 sm:top-4 sm:h-14 sm:w-14">
                    <span className="text-[20px] font-black leading-none sm:text-[24px]">{step.number}</span>
                  </div>

                  <img
                    src={iconSrc}
                    alt=""
                    aria-hidden="true"
                    className="mt-6 h-32 w-32 object-contain sm:mt-5 sm:h-52 sm:w-52 md:h-56 md:w-56"
                  />

                  <p className="mt-4 max-w-[9rem] text-[12px] font-extrabold uppercase leading-4 tracking-[-0.02em] text-brand.black sm:max-w-[12rem] sm:text-base sm:leading-6">
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
