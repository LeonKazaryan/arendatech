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
  image: string;
};

export const equipmentItems: EquipmentItem[] = [
  {
    id: 'katok',
    ruTitle: 'Катки',
    kzTitle: 'Тығыздағыштар',
    image: katokImage,
  },
  {
    id: 'asphaltoukladchik',
    ruTitle: 'Асфальтоукладчики',
    kzTitle: 'Асфальт төсегіштер',
    image: asphaltoukladchikImage,
  },
  {
    id: 'ekskavator',
    ruTitle: 'Экскаваторы',
    kzTitle: 'Экскаваторлар',
    image: ekskavatorImage,
  },
  {
    id: 'greyder',
    ruTitle: 'Грейдеры',
    kzTitle: 'Грейдерлер',
    image: greyderImage,
  },
  {
    id: 'samosval',
    ruTitle: 'Самосвал',
    kzTitle: 'Самосвал',
    image: samosvalImage,
  },
  {
    id: 'pogruzchik',
    ruTitle: 'Погрузчик',
    kzTitle: 'Жүктегіш',
    image: pogruzchikImage,
  },
  {
    id: 'trally',
    ruTitle: 'Тралы',
    kzTitle: 'Тралдар',
    image: trallyImage,
  },
];