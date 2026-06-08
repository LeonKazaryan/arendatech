import asphaltoukladchikImage from '../assets/images/vehicles/asphaltoukladchik.png';
import ekskavatorImage from '../assets/images/vehicles/ekskavator.png';
import greyderImage from '../assets/images/vehicles/greyder.png';
import katokImage from '../assets/images/vehicles/katok.png';
import pogruzchikImage from '../assets/images/vehicles/pogruzchik.png';
import samosvalImage from '../assets/images/vehicles/samosval.png';
import trallyImage from '../assets/images/vehicles/trally.png';

export type EquipmentItem = {
  id: string;
  ruTitle: string;
  kzTitle: string;
  ruPrice: string;
  kzPrice: string;
  image: string;
};

export const equipmentItems: EquipmentItem[] = [
  {
    id: 'katok',
    ruTitle: 'Катки',
    kzTitle: 'Тығыздағыштар',
    ruPrice: '12 000 / час',
    kzPrice: '12 000 / сағ',
    image: katokImage,
  },
  {
    id: 'asphaltoukladchik',
    ruTitle: 'Асфальтоукладчики',
    kzTitle: 'Асфальт төсегіштер',
    ruPrice: '40 000 / час',
    kzPrice: '40 000 / сағ',
    image: asphaltoukladchikImage,
  },
  {
    id: 'ekskavator',
    ruTitle: 'Экскаваторы',
    kzTitle: 'Экскаваторлар',
    ruPrice: '25 000 / час',
    kzPrice: '25 000 / сағ',
    image: ekskavatorImage,
  },
  {
    id: 'greyder',
    ruTitle: 'Грейдеры',
    kzTitle: 'Грейдерлер',
    ruPrice: '20 000 / час',
    kzPrice: '20 000 / сағ',
    image: greyderImage,
  },
  {
    id: 'samosval',
    ruTitle: 'Самосвал',
    kzTitle: 'Самосвал',
    ruPrice: '15 000 / час',
    kzPrice: '15 000 / сағ',
    image: samosvalImage,
  },
  {
    id: 'pogruzchik',
    ruTitle: 'Погрузчик',
    kzTitle: 'Жүктегіш',
    ruPrice: '15 000 / час',
    kzPrice: '15 000 / сағ',
    image: pogruzchikImage,
  },
  {
    id: 'trally',
    ruTitle: 'Тралы',
    kzTitle: 'Тралдар',
    ruPrice: '70 000 за рейс по городу',
    kzPrice: '70 000 / қала ішіндегі рейс',
    image: trallyImage,
  },
];
