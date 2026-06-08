import { CheckCircle2, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import bannerImage from '../assets/images/banner.jpeg';
import { contactData } from '../data/contactData';
import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';
import { ActionButton } from '../components/ActionButton';

type HeroProps = {
  language: Language;
};

export function Hero({ language }: HeroProps) {
  const content = translations[language].hero;

  return (
    <section className="relative overflow-hidden bg-brand-gray">
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Дорожная спецтехника на объекте"
          className="h-full w-full object-cover object-right brightness-125 saturate-125 contrast-110 md:object-center md:brightness-110 md:saturate-110 md:contrast-105"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 via-35% to-transparent md:from-white/90 md:via-white/70 md:via-40% md:to-white/8 lg:from-white/82 lg:via-white/48 lg:to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.04))] md:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.1))]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] max-w-[1280px] items-center px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-20">
        <div className="max-w-[680px] rounded-[28px] bg-white/35 px-4 py-5 backdrop-blur-[2px] md:bg-transparent md:px-0 md:py-0">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.32em] text-brand-yellow md:text-base">
            {content.eyebrow}
          </p>
          <h1 className="max-w-[12ch] text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-brand-black md:text-6xl lg:text-[5.5rem]">
            <span className="block">{content.titleTop}</span>
            <span className="block text-brand-yellow">{content.titleBottom}</span>
          </h1>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-black uppercase leading-none tracking-[-0.04em] text-brand-black md:text-2xl">
            <span>{content.subtitleLine}</span>
            <span>•</span>
            <span>{content.subtitleAccent}</span>
          </p>
          <p className="mt-5 max-w-[28rem] text-base font-semibold leading-7 text-black/75 md:text-lg">
            {content.subtitle}
          </p>

          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <ActionButton icon={<FaWhatsapp className="h-4 w-4 text-white" />} label={content.whatsapp} tone="success" href={contactData.whatsappHref} className="h-14 sm:min-w-[180px]" />
            <ActionButton icon={<Phone size={18} strokeWidth={2.4} className="text-brand.black" />} label={content.call} tone="warning" href={contactData.callHref} className="h-14 sm:min-w-[180px]" />
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
            {content.features.map((feature) => (
              <li key={feature} className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-medium text-black/68">
                <CheckCircle2 size={18} strokeWidth={2.3} className="shrink-0 text-brand-yellow" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
