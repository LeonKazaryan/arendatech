import type { Language } from '../data/siteContent';
import { translations } from '../data/siteContent';
import { equipmentItems } from '../data/equipmentData';
import { EquipmentCard } from '../components/EquipmentCard';

type EquipmentCatalogProps = {
  language: Language;
};

export function EquipmentCatalog({ language }: EquipmentCatalogProps) {
  const content = translations[language].equipment;
  const topRow = equipmentItems.slice(0, 4);
  const bottomRow = equipmentItems.slice(4);
  const getPriceLabel = (item: (typeof equipmentItems)[number]) => (language === 'ru' ? item.ruPrice : item.kzPrice);

  return (
    <section className="bg-brand.gray py-14 md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-brand.black md:text-5xl">
          {content.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {topRow.map((item) => (
            <EquipmentCard
              key={item.id}
              image={item.image}
              title={language === 'ru' ? item.ruTitle : item.kzTitle}
              priceLabel={getPriceLabel(item)}
            />
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:max-w-[920px] xl:mx-auto">
          {bottomRow.map((item) => (
            <EquipmentCard
              key={item.id}
              image={item.image}
              title={language === 'ru' ? item.ruTitle : item.kzTitle}
              priceLabel={getPriceLabel(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
