import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nulla at odio cursus, sit amet ornare justo',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nulla at odio cursus, sit amet ornare justo',
    link: 'Learn More'
  },
  {
    name: 'Digital Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nulla at odio cursus, sit amet ornare justo',
    link: 'Learn More'
  },
  {
    name: 'Product Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum nulla at odio cursus, sit amet ornare justo',
    link: 'Learn More'
  },
]
const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mx-auto'
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit veniam distinctio repellendus dolorum.</h3>
          <button className='btn btn-sm'>See my Work</button>
        </motion.div>
        <motion.div
          className='flex-1'
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            {services.map((item, index) => {
              const { name, description, link } = services;
              return (
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{item.name}</h4>
                    <p className='font-secondary leading-tight'>{item.description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex items-center justify-center'>
                      <BsArrowUpRight />
                    </a>
                    <a href="#" className='text-gradient text-sm'>{item.link}</a>
                  </div>
                </div>)
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
