export type Language = 'ru' | 'kz';

export type TranslationKey = keyof typeof translations.ru;

export const translations = {
  ru: {
    header: {
      logoTitle: 'СПЕЦТЕХНИКА',
      logoSubtitle: 'АРЕНДА И УСЛУГИ',
      whatsapp: 'WHATSAPP',
      call: 'ПОЗВОНИТЬ',
    },
    hero: {
      eyebrow: 'АРЕНДА И УСЛУГИ',
      titleTop: 'ДОРОЖНОЙ',
      titleBottom: 'СПЕЦТЕХНИКИ',
      subtitleLine: 'ПО ВСЕМУ КАЗАХСТАНУ',
      subtitleAccent: '24/7',
      subtitle: 'Быстро подберем технику под ваш объект и организуем выезд.',
      whatsapp: 'WHATSAPP',
      call: 'ПОЗВОНИТЬ',
      features: ['Работаем 24/7', 'По всему Казахстану', 'Быстрая подача техники', 'Опытные операторы'],
    },
    coverageMap: {
      title: 'РАБОТАЕМ ПО ВСЕМУ КАЗАХСТАНУ',
      subtitle: 'Организуем подачу техники по всей стране.',
    },
    equipment: {
      title: 'НАША ТЕХНИКА',
      cta: 'УЗНАТЬ СТОИМОСТЬ',
    },
    benefits: {
      title: 'ПОЧЕМУ ВЫБИРАЮТ НАС',
    },
    process: {
      title: 'КАК МЫ РАБОТАЕМ',
    },
  },
  kz: {
    header: {
      logoTitle: 'АРНАУЛЫ ТЕХНИКА',
      logoSubtitle: 'ЖАЛҒА БЕРУ ЖӘНЕ ҚЫЗМЕТ',
      whatsapp: 'WHATSAPP',
      call: 'ҚОҢЫРАУ ШАЛУ',
    },
    hero: {
      eyebrow: 'ЖАЛҒА БЕРУ ЖӘНЕ ҚЫЗМЕТ',
      titleTop: 'ЖОЛ',
      titleBottom: 'ТЕХНИКАСЫ',
      subtitleLine: 'ҚАЗАҚСТАН БОЙЫНША',
      subtitleAccent: '24/7',
      subtitle: 'Нысаныңызға сай техниканы тез таңдап, жеткізуді ұйымдастырамыз.',
      whatsapp: 'WHATSAPP',
      call: 'ҚОҢЫРАУ ШАЛУ',
      features: ['Тәулік бойы', 'Қазақстан бойынша', 'Техниканы жедел жіберу', 'Тәжірибелі операторлар'],
    },
    coverageMap: {
      title: 'ҚАЗАҚСТАН БОЙЫНША ЖҰМЫС ІСТЕЙМІЗ',
      subtitle: 'Техниканы бүкіл ел бойынша жеткіземіз.',
    },
    equipment: {
      title: 'БІЗДІҢ ТЕХНИКА',
      cta: 'БАҒАСЫН БІЛУ',
    },
    benefits: {
      title: 'НЕГЕ БІЗДІ ТАҢДАЙДЫ',
    },
    process: {
      title: 'БІЗ ҚАЛАЙ ЖҰМЫС ІСТЕЙМІЗ',
    },
  },
} as const;