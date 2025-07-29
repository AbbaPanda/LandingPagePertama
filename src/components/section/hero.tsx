import React from 'react';
import { Hero_Content, HERO_BACKGROUND_ICONS } from '../../constant/hero';
import jsIcon from '../../assets/icons/JS.png';
import reactIcon from '../../assets/icons/React.png';
import cssIcon from '../../assets/icons/CSS.png';
import figmaIcon from '../../assets/icons/Figma.png';
import htmlIcon from '../../assets/icons/html.png';
import tailwindIcon from '../../assets/icons/Tailwind.png';
import heroBg from '../../assets/images/hero-bg.png';
import texture from '../../assets/images/texture.png';
import cup from '../../assets/icons/cup.svg';

const HeroSection = () => {
  const {
    badgeText,
    titlePart1,
    highlight,
    titlePart2,
    description,
    buttonText,
    buttonLink,
  } = Hero_Content;

  const IconSrcMap: { [key: string]: string } = {
    '/images/js-icon.png': jsIcon,
    '/images/react-icon.png': reactIcon,
    '/images/css-icon.png': cssIcon,
    '/images/figma-icon.png': figmaIcon,
    '/images/html-icon.png': htmlIcon,
    '/images/tailwind-icon.png': tailwindIcon,
  };

  const iconStyle: { [key: string]: React.CSSProperties } = {
    '/images/flutter-icon.png': {
      width: 'clamp(3rem, 5.56vw, 5rem)',
      height: 'clamp(3rem, 5.56vw, 5rem)',
    },
    '/images/figma-icon.png': {
      width: 'clamp(3rem, 5.13vw, 4.62rem)',
      height: 'clamp(3rem, 5.13vw, 4.62rem)',
    },
    '/images/js-icon.png': {
      width: 'clamp(3rem, 5.56vw, 5rem)',
      height: 'clamp(3rem, 5.56vw, 5rem)',
    },
    '/images/html-icon.png': {
      width: 'clamp(3.94rem, 5.71vw, 5.14rem)',
      height: 'clamp(3.94rem, 5.71vw, 5.14rem)',
    },
    '/images/react-icon.png': {
      width: 'clamp(3rem, 6.94vw, 6.25rem)',
      height: 'clamp(3rem, 6.94vw, 6.25rem)',
    },
    '/images/css-icon.png': {
      width: 'clamp(3rem, 5.49vw, 4.94rem)',
      height: 'clamp(3rem, 5.49vw, 4.94rem)',
    },
  };

  return (
    <section
      id='hero'
      className='relative flex flex-col items-center justify-center text-white min-h-[750px] md:min-h-[850px] overflow-hidden bg-cover bg-center  bg-black'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='relative z-20 flex flex-col items-center max-w-[353px] md:max-w-[906px] px-4 py-16'>
        <span className='relative inline-block text-sm font-semibold mb-6 backdrop-blur-sm p-[2px] rounded-full overflow-hidden'>
          <span className='absolute z-0 inset-0 rounded-full bg-gradient-to-r from-black to-blue-600'></span>
          <span className='relative z-10 bg-neutral-950 px-4 py-2 rounded-full gap-2 flex'>
            <img src={cup} alt='cup' />
            {badgeText}
          </span>
        </span>
        <h1 className='text-4xl md:text-6xl leading-tight font-bold mb-6 drop-shadow-md text-center'>
          {titlePart1}
          <span className='text-primer-300'> {highlight} </span>
          {titlePart2}
        </h1>
        <p className='text-lg md:text-xl text-neutral-25 max-w-2xl mb-10 drop-shadow-md text-center'>
          {description}
        </p>
        <a
          href={buttonLink}
          className='flex bg-primer-300 rounded-full text-center items-center justify-center text-sm font-semibold h-11 w-full md:w-60'
        >
          {buttonText}
        </a>
      </div>
      {HERO_BACKGROUND_ICONS.map((icon, index) => (
        <img
          key={index}
          src={IconSrcMap[icon.src]}
          alt={icon.alt}
          className={`z-10 absolute ${icon.positionClasses}`}
          style={iconStyle[icon.src]}
        />
      ))}
      <img
        src={texture}
        alt='texture'
        className='absolute sm:flex bottom-0 mb-0 w-full'
      />
    </section>
  );
};

export default HeroSection;
