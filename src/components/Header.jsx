import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-end items-center'>
          {/* <a href='#'>
            <img src={Logo} alt='Imagen logo' />
          </a> */}

          <a href="https://www.linkedin.com/in/nicolas-huanca/" target='blank' rel='noopener noreferrer' className='btn btn-sm py-[13.5px]'>LinkedIn</a>
        </div>
      </div>
    </header>
  )
};

export default Header;
