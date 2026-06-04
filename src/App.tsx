import { useState } from 'react';
import type { Language } from './data/siteContent';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { CoverageMap } from './sections/CoverageMap';
import { EquipmentCatalog } from './sections/EquipmentCatalog';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { HowWeWork } from './sections/HowWeWork';

export default function App() {
  const [language, setLanguage] = useState<Language>('ru');

  return (
    <div className="min-h-screen bg-white text-brand.black">
      <Header language={language} onLanguageChange={setLanguage} />
      <main>
        <Hero language={language} />
        <CoverageMap language={language} />
        <EquipmentCatalog language={language} />
        <WhyChooseUs language={language} />
        <HowWeWork language={language} />
      </main>
    </div>
  );
}