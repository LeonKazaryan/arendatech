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
    footer: {
      title: 'НУЖНА ТЕХНИКА?',
      subtitle: 'СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС',
      whatsapp: 'WHATSAPP',
      call: 'ПОЗВОНИТЬ',
      address: 'Казахстан, г. Астана',
      street: 'ул. Бекетая 5/1',
      phone1: '+7 701 511 11 64',
      phone2: '+7 775 882 44 21',
      logoSubtitle: 'АРЕНДА И УСЛУГИ',
      pdf: 'СКАЧАТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ',
      contractTemplate: 'СКАЧАТЬ ШАБЛОН ДОГОВОРА',
      copyright: '© 2026 Спецтехника',
    },
  },
  kz: {
    header: {
      logoTitle: 'СПЕЦТЕХНИКА',
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
    footer: {
      title: 'ТЕХНИКА ҚАЖЕТ ПЕ?',
      subtitle: 'БІЗБЕН ДӘЛ ҚАЗІР ХАБАРЛАСЫҢЫЗ',
      whatsapp: 'WHATSAPP',
      call: 'ҚОҢЫРАУ ШАЛУ',
      address: 'Қазақстан, Астана қаласы',
      street: 'Бекетая көшесі, 5/1',
      phone1: '+7 701 511 11 64',
      phone2: '+7 775 882 44 21',
      logoSubtitle: 'ЖАЛҒА БЕРУ ЖӘНЕ ҚЫЗМЕТ',
      pdf: 'КОММЕРЦИЯЛЫҚ ҰСЫНЫС ЖҮКТЕУ',
      contractTemplate: 'ШАРТ ҮЛГІСІН ЖҮКТЕУ',
      copyright: '© 2026 Спецтехника',
    },
  },
} as const;
