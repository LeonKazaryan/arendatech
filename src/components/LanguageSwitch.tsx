import type { Language } from '../data/siteContent';

type LanguageSwitchProps = {
  value: Language;
  onChange: (language: Language) => void;
};

export function LanguageSwitch({ value, onChange }: LanguageSwitchProps) {
  return (
    <div className="inline-flex h-[3.25rem] w-full items-center justify-center gap-1.5 rounded-full border border-white/70 bg-white/70 px-2 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-brand.black shadow-sm backdrop-blur-md sm:h-11 sm:w-auto sm:gap-2 sm:text-xs sm:tracking-[0.16em]">
      <button
        type="button"
        className={value === 'ru' ? 'text-brand.black' : 'text-black/35'}
        aria-pressed={value === 'ru'}
        onClick={() => onChange('ru')}
      >
        RU
      </button>
      <span className="text-black/30">|</span>
      <button
        type="button"
        className={value === 'kz' ? 'text-brand.black' : 'text-black/35'}
        aria-pressed={value === 'kz'}
        onClick={() => onChange('kz')}
      >
        KZ
      </button>
    </div>
  );
}
