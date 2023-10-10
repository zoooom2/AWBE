import {
  artAndCraftImg,
  deliciousCuisineImg,
  languageAndDialectImg,
  problemAndOpportunitiesImg,
  sponsor1,
  sponsor2,
  sponsor3,
  tradFestImg,
} from '../assets';

import { FaXTwitter, FaInstagram, FaFacebook } from 'react-icons/fa6';

export const footerLinks = [
  {
    name: 'Festivals',
    to: '/trad-fest',
  },
  {
    name: 'Opportunities and Problems',
    to: '/problems-and-opportunities',
  },
  {
    name: 'Art and Craft',
    to: '/art-and-craft',
  },
  {
    name: 'Language and Dialect',
    to: '/language-and-dialect',
  },
  {
    name: 'Delicious Cuisine',
    to: '/delicious-cuisine',
  },
];

export const sponsorArray = [
  { img: sponsor1, name: 'JAM Foundation' },
  { img: sponsor2, name: 'Skypricorn' },
  { img: sponsor3, name: 'Duocore Technologies' },
];

export const socialsConstant = [
  {
    name: 'X',
    logo: FaXTwitter,
  },
  {
    name: 'Instagram',
    logo: FaInstagram,
  },
  {
    name: 'Facebook',
    logo: FaFacebook,
  },
];

export const artAndCraftPageConstant = {
  Title: 'Art And Craft',
  Paragraph: `The Eggon people are skilled in various traditional arts and crafts.They are known for their pottery, producing intricately designed clay pots and other vessels. They also excel in weaving, creating beautiful textiles and fabrics. Additionally, the tribe has a rich musical heritage, with traditional instruments like flutes, drums, and xylophones playing a significant role in their cultural expressions, but are predominantly farmers.`,
  Img: artAndCraftImg,
};
export const deliciousCuisineConstant = {
  Title: 'Delicious Cuisine',
  Paragraph:
    'The Eggon people have a diverse diet based on their agricultural practices. Staples include yam, millet, sorghum, gueinea corn, maize, beni- seed, beans, Lima beans (ebyekpme)and rice,  which are often used to prepare various types of assorted food. They also consume wild game and fish. Palm wine and other local beverages are popular choices for social gatherings and celebrations.',
  Img: deliciousCuisineImg,
};
export const languageAndDialectConst = {
  Title: 'Language and Dialect',
  Paragraph:
    ' The Eggon people speak the Eggon language, which belongs to the Chadic branch of the Afro-Asiatic language family. The Eggon language has several dialects depending on the geographical area and local variations.',
  Img: languageAndDialectImg,
};
export const problemsAndOpportunitiesConst = {
  Title: 'Problems and Opportunities',
  Paragraph:
    'Like many indigenous communities, the Eggon people face challenges in preserving their cultural heritage in the face of modernization and globalization. Encouraging the younger generation to embrace and continue their traditions is essential. On the other hand, the promotion of cultural tourism can provide opportunities for economic growth and development, showcasing their unique customs, arts, and crafts to a broader audience while also generating income for the community. Additionally, sustainable development initiatives can help improve their livelihoods while preserving their environment and natural resources. Overall, the Eggon people have a rich cultural heritage and continue to play an essential role in the social, economic, and cultural life of Nasarawa State, Nigeria.',
  Img: problemAndOpportunitiesImg,
};
export const tradFestConst = {
  Title: 'Traditional Festivals',
  Paragraph:
    'The Ombli Egno is an event which is celebrated with the various warriors of the tribe, is done once in a year. Ashimu/Nnungu Festival is one of the most important festivals celebrated by the Eggon people. It usually takes place annually and involves various activities such as traditional dances, cultural displays, and communal feasting. The festival is a time for expressing gratitude to the gods for bountiful harvests and good fortune.',
  Img: tradFestImg,
};
