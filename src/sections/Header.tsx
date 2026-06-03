import { Phone, MessageCircleMore } from 'lucide-react';
import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';
import { ActionButton } from '../components/ActionButton';
import { LanguageSwitch } from '../components/LanguageSwitch';

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function Header({ language, onLanguageChange }: HeaderProps) {
  const content = translations[language].header;

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/75 shadow-glass backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3 md:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand.yellow text-brand.black shadow-sm">
            <span className="text-lg font-black">S</span>
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-extrabold uppercase tracking-[0.18em] text-brand.black md:text-base">
              {content.logoTitle}
            </div>
            <div className="truncate text-[11px] font-medium uppercase tracking-[0.2em] text-black/55">
              {content.logoSubtitle}
            </div>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-2 sm:flex sm:w-auto sm:items-center md:gap-3">
          <LanguageSwitch value={language} onChange={onLanguageChange} />
          <ActionButton icon={MessageCircleMore} label={content.whatsapp} tone="success" className="h-11 px-3 text-[12px] sm:h-14 sm:min-w-[140px] sm:px-5 sm:text-[15px]" />
          <ActionButton icon={Phone} label={content.call} tone="warning" className="h-11 px-3 text-[12px] sm:h-14 sm:min-w-[140px] sm:px-5 sm:text-[15px]" />
        </div>
      </div>
    </header>
  );
}