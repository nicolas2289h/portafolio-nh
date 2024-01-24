import React from 'react';
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[80px] backdrop-blur-xl border border-white/25 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
        <Link to='home' activeClass='active' smooth={true} spy={true} offset={-200} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <i class="fa-solid fa-house"></i>
        </Link>
        <Link to='about' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <i class="fa-solid fa-user"></i>
        </Link>
        {/* <Link to='services' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </Link> */}
        <Link to='work' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <i class="fa-solid fa-briefcase"></i>
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <i class="fa-solid fa-comments"></i>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
