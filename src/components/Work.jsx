import React from 'react';
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import ImgTodolist from '../assets/img-work/img-todolist.png'
import ImgClima from '../assets/img-work/img-clima.png'
import ImgCifrado from '../assets/img-work/img-cifrado.png'
import ImgPagServicios from '../assets/img-work/img-pagina-servicios.png'
import ImgTiendaVirtual from '../assets/img-work/img-tienda-virtual.png'
import ImgPaginaWeb from '../assets/img-work/img-pagina-web.png'
import ImgReservas from '../assets/img-work/img-meriendas.png'
import ImgDashboard from '../assets/img-work/img-dashboard.png'
import ImgJuegoJs from '../assets/img-work/img-juego-memoria.png'
import ImgGestor from '../assets/img-work/img-gestion-empleados.png'
import ImgCalculadora from '../assets/img-work/img-calculadora.png'

const Work = () => {
  return (
    <section className='section lg:mt-0 mt-36' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-wrap flex-col w-full'>
          <motion.div
            className='flex gap-x-12 lg:mb-6 lg:flex-row flex-col'
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div className='lg:w-[25%]'>
              <h2 className='h2 leading-tight text-accent'>Mis <br />
                Proyectos</h2>
              <p className='max-w-sm mb-8 lg:w-[100%]'>
                Algunos de mis proyectos realizados con Javascript y con React.
              </p>
              <a href='https://github.com/nicolas2289h/' target='blank' rel='noreferrer noopener' className='btn btn-sm py-4'>Ver repositorio</a>
            </div>

            <div className='flex gap-4 lg:mt-0 mt-8 justify-end flex-wrap items-end relative'>
              <a href='https://pagina-reservas-5be219dig-nicolas2289h.vercel.app/' rel='noreferrer noopener' target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[31.5%] lg:h-[180px] cursor-pointer' >
                <div className='group-hover:bg-black/85 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgReservas} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Sistema para reserva de meriendas de un local comercial.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-9 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#React #Boostrap #Firebase</span>
                </div>
              </a>

              <a href='https://todolist-react-mu.vercel.app/' rel='noreferrer noopener' target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[31.5%] lg:h-[180px] cursor-pointer' >
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgTodolist} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Aplicación para Listado de tareas con localStorage.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#React #Boostrap</span>
                </div>
              </a>

              <a href='https://nh-employees.vercel.app/' rel='noreferrer noopener' target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[31.5%] lg:h-[180px] cursor-pointer' >
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgGestor} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Sistema de Gestion de Empleados con operaciones CRUD</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#React #SpringBoot #Boostrap</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className='flex gap-x-12 lg:mb-0 lg:flex-row flex-col'
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>

            <div className='flex gap-4 lg:mb-0 lg:flex-row flex-col lg:mt-0 mt-4'>
              <a href='https://carrito-compras-pi.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[40%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgTiendaVirtual} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Diseño de una Tienda virtual básica con carrito de compras.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#React #CSS</span>
                </div>
              </a>

              <a href='https://encriptador-cifrado-cesar.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[40%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgCifrado} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Encriptador realizado como parte de un challenge de la empresa Alura Latam.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-5 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript</span>
                </div>
              </a>

              <a href='https://weather-app-seven-pearl-45.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[40%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgClima} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Aplicacion que muestra el <br /> clima en tiempo real mediante una API.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-5 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript</span>
                </div>
              </a>

              <a href='https://dashboard-weld-iota.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[40%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgDashboard} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Dashboard responsivo con gráficos dinámicos.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-5 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript <br />#DarkTheme</span>
                </div>
              </a>
            </div>
          </motion.div>


          <motion.div
            className='flex gap-x-12 lg:mt-6 lg:flex-row flex-col'
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>

            <div className='flex gap-4 lg:mb-0 lg:flex-row flex-col lg:mt-0 mt-4'>
              {/* <a href='https://pagina-web-servicios.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[34.4%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgPaginaWeb} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Diseño de página web responsive con menu desplegable.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-9 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript</span>
                </div>
              </a> */}

              <a href='https://juego-de-memoria-blond.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[34.8%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgJuegoJs} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Juego de memoria implementado con Javascript.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript</span>
                </div>
              </a>

              <a href='https://nh-calculadora.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[35.4%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgCalculadora} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Calculadora implementada con React.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#React #FramerMotion</span>
                </div>
              </a>

              {/* <a href='https://pagina-web-responsive.vercel.app/' rel="noopener noreferrer" target='blank' className='group relative overflow-hidden border-2 border-white/50 rounded-md lg:w-[34.4%] lg:h-[180px] '>
                <div className='group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-110 transition-all duration-500 lg:h-[180px] object-cover' src={ImgPagServicios} alt="" />
                <div className='absolute -bottom-full left-4 group-hover:bottom-20 transition-all duration-500 z-50'>
                  <span className='text-md font-semibold'>Diseño de página web con video loop de portada.</span>
                </div>
                <div className='absolute -bottom-full left-4 group-hover:bottom-10 transition-all duration-700 z-50'>
                  <span className='text-md font-semibold'>#HTML #CSS #Javascript</span>
                </div>
              </a> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Work;
