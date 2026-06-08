import type { ReactNode } from 'react';

type ActionButtonProps = {
  icon: ReactNode;
  label: string;
  tone: 'success' | 'warning';
  href?: string;
  className?: string;
  labelClassName?: string;
};

const toneClasses: Record<ActionButtonProps['tone'], string> = {
  success: 'bg-brand-green text-white hover:bg-[#22bd5f]',
  warning: 'bg-brand-yellow text-brand-black hover:bg-[#e0b200]',
};

export function ActionButton({ icon: Icon, label, tone, href, className = '', labelClassName = '' }: ActionButtonProps) {
  const classes = `inline-flex w-full items-center justify-center gap-3 rounded-xl px-5 text-[15px] font-extrabold uppercase tracking-[0.08em] transition-colors duration-200 sm:w-auto ${toneClasses[tone]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="inline-flex items-center justify-center">{Icon}</span>
        <span className={labelClassName}>{label}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
    >
      <span className="inline-flex items-center justify-center">{Icon}</span>
      <span className={labelClassName}>{label}</span>
    </button>
  );
}
