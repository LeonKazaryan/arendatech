import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';
import { benefitItems } from '../data/landingSectionsData';
import coverageIcon from '../assets/images/yellowicons/kazakhstan.png';
import fleetIcon from '../assets/images/yellowicons/excavator.png';
import deliveryIcon from '../assets/images/yellowicons/delivery.png';
import scheduleIcon from '../assets/images/yellowicons/247.png';
import teamIcon from '../assets/images/yellowicons/proffesional.png';
import docsIcon from '../assets/images/yellowicons/documents.png';

const benefitIcons: Record<string, string> = {
  coverage: coverageIcon,
  fleet: fleetIcon,
  delivery: deliveryIcon,
  schedule: scheduleIcon,
  team: teamIcon,
  docs: docsIcon,
};

type WhyChooseUsProps = {
  language: Language;
};

export function WhyChooseUs({ language }: WhyChooseUsProps) {
  const content = translations[language].benefits;

  return (
    <section className="bg-brand-black py-14 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
          {content.title}
        </h2>

        <div className="mt-10 grid gap-y-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-6 lg:gap-y-0 lg:divide-x lg:divide-brand-yellow/40">
          {benefitItems.map((item) => {
            const iconSrc = benefitIcons[item.id];

            return (
              <article key={item.id} className="flex flex-col items-center px-2 text-center lg:px-4">
                <img
                  src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-24 w-24 object-contain scale-[1.55] md:h-28 md:w-28 md:scale-[1.65]"
                />
                <p className="mt-4 max-w-[12rem] text-base font-semibold leading-6 text-white/92 md:text-lg">
                  {language === 'ru' ? item.ruLabel : item.kzLabel}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}