import type { ReactNode } from "react";
import { Download, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { ActionButton } from "../components/ActionButton";
import { contactData } from "../data/contactData";
import type { Language } from "../data/siteContent";
import { translations } from "../data/siteContent";

function ContactItem({
  icon,
  label,
  className = "",
  labelClassName = "",
}: {
  icon: ReactNode;
  label: ReactNode;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-white/3 text-brand.yellow shadow-[0_2px_0_rgba(0,0,0,0.12)]">
        {icon}
      </div>
      <p
        className={`max-w-[18rem] text-[15px] font-bold leading-6 text-white/92 sm:text-[16px] ${labelClassName}`}
      >
        {label}
      </p>
    </div>
  );
}

type FooterProps = {
  language: Language;
};

export function Footer({ language }: FooterProps) {
  const content = translations[language].footer;

  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10 md:px-6 lg:px-8 lg:py-12">
        <div className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.95fr] lg:items-center lg:gap-10">
            <div className="max-w-[28rem]">
              <h2 className="whitespace-nowrap text-[22px] font-black uppercase leading-[0.92] tracking-[-0.07em] text-white sm:text-[26px] lg:text-[34px]">
                {content.title}
              </h2>
              <p
                className="mt-3 whitespace-nowrap text-[11px] font-extrabold uppercase leading-tight tracking-[-0.03em] sm:text-[13px] lg:text-[15px]"
                style={{ color: "#F2C200" }}
              >
                {content.subtitle}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:justify-self-end xl:min-w-[34rem]">
              <ActionButton
                icon={<FaWhatsapp className="h-4 w-4 text-white" />}
                label={content.whatsapp}
                tone="success"
                href={contactData.whatsappHref}
                className="h-11 px-4 text-[12px] sm:h-12 sm:min-w-[170px] sm:px-5 sm:text-[13px]"
                labelClassName="text-[12px] sm:text-[13px]"
              />

              <ActionButton
                icon={
                  <Phone
                    size={18}
                    strokeWidth={2.4}
                    className="text-brand.black"
                  />
                }
                label={content.call}
                tone="warning"
                href={contactData.callHref}
                className="h-11 px-4 text-[12px] sm:h-12 sm:min-w-[170px] sm:px-5 sm:text-[13px]"
                labelClassName="text-[12px] sm:text-[13px]"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[auto_auto] lg:justify-between lg:pt-2">
            <ContactItem
              icon={
                <MapPin
                  className="h-6 w-6 text-brand.yellow"
                  strokeWidth={2.4}
                />
              }
              label={
                <>
                  <span>{content.address}</span>
                  <br />
                  <span>{content.street}</span>
                </>
              }
            />
            <ContactItem
              className="lg:justify-self-end"
              labelClassName="lg:text-right"
              icon={
                <Phone
                  className="h-6 w-6 text-brand.yellow"
                  strokeWidth={2.4}
                />
              }
              label={
                <>
                  <span>{contactData.callPhoneDisplay}</span>
                  <br />
                  <span>{contactData.whatsappPhoneDisplay}</span>
                </>
              }
            />
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-brand.yellow text-brand.black shadow-[0_2px_0_rgba(0,0,0,0.12)]">
                <span className="text-[24px] font-black leading-none">S</span>
              </div>
              <div>
                <div className="text-[18px] font-black uppercase tracking-[0.16em] text-white">
                  СПЕЦТЕХНИКА
                </div>
                <div
                  className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: "#F2C200" }}
                >
                  {content.logoSubtitle}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex min-h-[56px] items-center justify-center gap-4 rounded-[16px] border border-white/12 bg-white/5 px-6 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Download className="h-5 w-5" />
              <span>{content.pdf}</span>
            </button>

            <div className="flex items-center justify-start gap-4 lg:justify-end">
              <p className="text-[14px] font-semibold text-white/72">
                {content.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
