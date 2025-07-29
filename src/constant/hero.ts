import type { BackgroundIcon } from '../types/hero';

export const Hero_Content = {
  badgeText: 'Top Bootcamp International',
  titlePart1: 'Become a',
  highlight: 'Expert Frontend Developer',
  titlePart2: 'Who Gets Hired',

  description:
    'Learn real skills. Build real projects. Ger real results with expert mentorship',
  buttonText: 'Join Now',
  buttonLink: '/Join',
};

export const HERO_BACKGROUND_ICONS: BackgroundIcon[] = [
  {
    src: '/images/tailwind-icon.png',
    alt: 'Tailwind',
    positionClasses: 'top-[10%] left-[10%] w-20 h-20 md:w-24 md:h-24',
  }, // Kiri atas
  {
    src: '/images/figma-icon.png',
    alt: 'Figma',
    positionClasses: 'top-[15%] right-[15%] w-20 h-20 md:w-24 md:h-24',
  }, // Kanan atas
  {
    src: '/images/js-icon.png',
    alt: 'JavaScript',
    positionClasses: 'top-[50%] left-[5%] w-16 h-16 md:w-20 md:h-20',
  }, // Kiri tengah
  {
    src: '/images/html-icon.png',
    alt: 'HTML',
    positionClasses: 'top-[50%] right-[5%] w-16 h-16 md:w-20 md:h-20',
  }, // Kanan tengah
  {
    src: '/images/react-icon.png',
    alt: 'React',
    positionClasses: 'bottom-[20%] left-[20%] w-20 h-20 md:w-24 md:h-24',
  }, // Kiri bawah
  {
    src: '/images/css-icon.png',
    alt: 'CSS3',
    positionClasses: 'bottom-[25%] right-[20%] w-16 h-16 md:w-20 md:h-20',
  }, // Kanan bawah
];
