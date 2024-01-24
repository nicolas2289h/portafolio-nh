import React from 'react';
// import CountUp from 'react-countup'
import JsLogo from '../assets/js-logo.png'
import HtmlLogo from '../assets/html-logo.png'
import CssLogo from '../assets/css-logo.png'
import ReactLogo from '../assets/react-logo.png'
import BootstrapLogo from '../assets/bootstrap-logo.png'
import TailwindLogo from '../assets/tailwind-logo.png'
import SassLogo from '../assets/sass-logo.png'
import GithubLogo from '../assets/github-logo.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  // const [ref] = useInView({
  //   threshold: 0.5
  // })
  return (
    <section id='about' className='section'>
      <div className='container mx-auto'>
        <div className='flex gap-y-10 flex-wrap lg:flex-row lg:items-center lg:gap-x-200 lg:gap-y-0 h-screen'>

          <motion.div
            className='flex-1 pl-2'
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='h2 text-accent'>Sobre Mi</h2>
            <h3 className='h3 mb-4'>🚀 ¡Hola! Soy Nicolás Huanca, estudiante de Ingeniería Informática y Desarrollador Web.</h3>
            <p>Me dedico a la creación de soluciones tecnológicas. Actualmente, me encuentro realizando proyectos en forma freelance y avanzando con mi proyecto de tesis, donde aplico y amplío mis conocimientos en el campo de la informática.</p>

            <p className='my-3'>🌐 En búsqueda de desafíos que me impulsen a seguir creciendo y contribuir en proyectos innovadores. 💻✨</p>

            {/* <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : null}
                  k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satified <br /> Clients
                </div>
              </div> */}
          </motion.div>

          <motion.div
            variants={fadeIn('down', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex gap-x-6 max-w-max mx-auto lg:mx-2'>

            <div className='flex flex-1 flex-wrap gap-8 items-end justify-center lg:w-[600px]'>
              <div className='flex flex-col place-items-center'>
                <img width={90} src={HtmlLogo} alt="" />
                <p>HTML</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={83} src={CssLogo} alt="" />
                <p>CSS</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={85} src={JsLogo} alt="" />
                <p>Javascript</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={91} src={SassLogo} alt="" />
                <p>Sass</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={90} src={BootstrapLogo} alt="" />
                <p className='pt-2'>Bootstrap</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={84} src={TailwindLogo} alt="" />
                <p>Tailwind</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={78} src={ReactLogo} className='rounded-[50%]' alt="" />
                <p>React</p>
              </div>
              <div className='flex flex-col place-items-center'>
                <img width={105} src={GithubLogo} className='rounded-[50%]' alt="" />
                <p>GitHub</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div >
    </section >
  );
};

export default About;
