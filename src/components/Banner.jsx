import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>Nicolás <span>Huanca</span></motion.h1>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>Soy </span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                '',
                100,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Desarrollador Front End de Argentina.
          </motion.p>
          <img src="" alt="" />

          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <a href="#contact"><button className='btn btn-lg'>Contactame</button></a>
            <p className='text-gradient btn-link'>Mi Portafolio</p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          // viewport={{ once: false, amount: 0.7 }}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]'>

          {/* IMAGEN DE PORTADA */}
          {/* <img src={Image} className='border' /> */}
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
