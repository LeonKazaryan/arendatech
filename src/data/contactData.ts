const callPhoneRaw = '77015111164';
const whatsappPhoneRaw = '77758824421';
const whatsappMessage = 'Здравствуйте, интересует техника';

export const contactData = {
  callPhoneDisplay: '+7 701 511 11 64',
  whatsappPhoneDisplay: '+7 775 882 44 21',
  callHref: `tel:+${callPhoneRaw}`,
  whatsappHref: `https://wa.me/${whatsappPhoneRaw}?text=${encodeURIComponent(whatsappMessage)}`,
} as const;
