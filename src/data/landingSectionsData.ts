import { FileText, HardHat, MapPinned, Truck, Clock3 } from 'lucide-react';
import type { IconType } from 'react-icons';
import { FaHelmetSafety, FaHandshakeAngle, FaPhone, FaTruckFast } from 'react-icons/fa6';

export type BenefitItem = {
  id: string;
  icon: typeof MapPinned;
  ruLabel: string;
  kzLabel: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  icon: IconType;
  ruLabel: string;
  kzLabel: string;
};

export const benefitItems: BenefitItem[] = [
  {
    id: 'coverage',
    icon: MapPinned,
    ruLabel: 'Работаем по всему Казахстану',
    kzLabel: 'Қазақстан бойынша жұмыс істейміз',
  },
  {
    id: 'fleet',
    icon: Truck,
    ruLabel: 'Собственный парк техники',
    kzLabel: 'Өз техника паркі',
  },
  {
    id: 'delivery',
    icon: Truck,
    ruLabel: 'Быстрая подача на объект',
    kzLabel: 'Нысанға жедел жеткізу',
  },
  {
    id: 'schedule',
    icon: Clock3,
    ruLabel: 'Работаем круглосуточно',
    kzLabel: 'Тәулік бойы жұмыс істейміз',
  },
  {
    id: 'team',
    icon: HardHat,
    ruLabel: 'Опытные специалисты',
    kzLabel: 'Тәжірибелі мамандар',
  },
  {
    id: 'docs',
    icon: FileText,
    ruLabel: 'Документы для юр. лиц',
    kzLabel: 'Заңды тұлғаларға құжаттар',
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 'request',
    number: '1',
    icon: FaPhone,
    ruLabel: 'Оставляете заявку',
    kzLabel: 'Өтінім қалдырасыз',
  },
  {
    id: 'selection',
    number: '2',
    icon: FaHelmetSafety,
    ruLabel: 'Подбираем технику',
    kzLabel: 'Техниканы таңдаймыз',
  },
  {
    id: 'agree',
    number: '3',
    icon: FaHandshakeAngle,
    ruLabel: 'Согласовываем условия',
    kzLabel: 'Шарттарды келісеміз',
  },
  {
    id: 'dispatch',
    number: '4',
    icon: FaTruckFast,
    ruLabel: 'Техника выезжает на объект',
    kzLabel: 'Техника нысанға шығады',
  },
];