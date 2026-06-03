import type { LucideIcon } from 'lucide-react';

type ActionButtonProps = {
  icon: LucideIcon;
  label: string;
  tone: 'success' | 'warning';
  className?: string;
};

const toneClasses: Record<ActionButtonProps['tone'], string> = {
  success: 'bg-brand-green text-white hover:bg-[#22bd5f]',
  warning: 'bg-brand-yellow text-brand-black hover:bg-[#e0b200]',
};

export function ActionButton({ icon: Icon, label, tone, className = '' }: ActionButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 text-[15px] font-extrabold uppercase tracking-[0.08em] transition-colors duration-200 sm:w-auto ${toneClasses[tone]} ${className}`}
    >
      <Icon size={20} strokeWidth={2.4} />
      <span>{label}</span>
    </button>
  );
}