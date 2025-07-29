import React from 'react';
import yourLogo from '../../assets/images/your-logo.png';
import hamburgerIcon from '../../assets/images/hamburger.png';
import type { HeaderProps, NavItems } from '../../types/header';

const Header: React.FC< HeaderProps > = ({ navItems }) => {
  return (
    <div className='w-full flex justify-center sm:px-0 mt-5 z-30 absolute top-0 left-0 right-0'>
      {/* wraper utama */}
      <div className='w-full sm:max-w-[827px] h-12 sm:h-16 flex items-center bg-neutral-900/40 border mx-5 border-neutral-700 rounded-full sm:backdrop-blur-xl sm:mx-0 px-6 sm:px-0 justify-between sm:justify-evenly'>
        {/* logo section */}
        <div className='flex items-center gap-2 min-w-fit'>
          <img
            src={yourLogo}
            alt='your logo'
            className='w-4.5 h--4.5 sm:w-[23px] sm:h-[23px]'
          />
          <p className='text-white text-sm sm:text-[18px] font-semibold drop-shadow-md'>
            Your Logo
          </p>
        </div>
        {/* nav link */}
        <nav className='hidden sm:flex justify-evenly gap-11 text-sm text-white fot-medium'>
          {navItems.map((item: NavItems) => (
            <a key={item.label} href={item.path}>
              {item.label}
            </a>
          ))}
        </nav>
        {/* button */}
        <button className='hidden sm:flex text-center bg-primer-300 hover:bg-blue-600 text-white rounded-full px-12 py-2 text-sm items-center justify-evenly font-semibold  '>
          Join Now
        </button>
        <button className='flex sm:hidden'>
          <img src={hamburgerIcon} alt='hamburger' />
        </button>
      </div>
    </div>
  );
};

export default Header;
