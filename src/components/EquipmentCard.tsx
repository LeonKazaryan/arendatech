type EquipmentCardProps = {
  image: string;
  title: string;
  priceLabel: string;
};

export function EquipmentCard({ image, title, priceLabel }: EquipmentCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_10px_24px_rgba(17,17,17,0.08)] ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1">
      <div className="aspect-[1.45/1] overflow-hidden bg-brand.gray">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-4 pt-3 sm:px-4">
        <h3 className="text-center text-[15px] font-extrabold uppercase tracking-[-0.02em] text-brand.black sm:text-base">
          {title}
        </h3>
        <div className="mt-4 flex flex-1 justify-center">
          <div className="flex min-h-11 w-full max-w-[255px] items-center justify-center rounded-lg bg-brand-yellow px-4 py-3 text-center text-[12px] font-extrabold uppercase tracking-[0.08em] text-brand.black sm:min-h-12 sm:text-[13px]">
            {priceLabel}
          </div>
        </div>
      </div>
    </article>
  );
}
