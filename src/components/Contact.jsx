import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import emailjs from '@emailjs/browser';

const initialValues = {
  user_name: '',
  user_email: '',
  message: ''
}

const Contact = () => {
  const [formData, setFormData] = useState(initialValues)
  const [error, setError] = useState('');
  const [estadoMensaje, setEstadoMensaje] = useState(false)
  const form = useRef();

  const resetEstadoMensaje = ()=>{
    setFormData(initialValues)
    setTimeout(() => {
      setEstadoMensaje(false)
    }, 3000);
  }

  const handleSubmit = e => {
    e.preventDefault()

    const regex = /^[a-zA-Z\s]*$/;

    if (!formData.user_name.match(regex)) {
      setError('El nombre no puede contener números ni símbolos');
      document.querySelector('#inputNombre').focus()
      return
    } else {
      setError('')
    }

    if (!formData.user_name.trim()) {
      document.querySelector('#inputNombre').value = ''
      document.querySelector('#inputNombre').focus()
    } else if (!formData.user_email.trim()) {
      document.querySelector('#inputEmail').value = ''
      document.querySelector('#inputEmail').focus()
    } else if (!formData.message.trim()) {
      document.querySelector('#textMensaje').value = ''
      document.querySelector('#textMensaje').focus()
    } else {

      emailjs.sendForm('service_mpbbpdl', 'template_8v57uuf', form.current, 'ywFaWQfBsDQGowwy2')
        .then((result) => {
          console.log(result.text);
          console.log('Enviado');
          setEstadoMensaje(true)
          resetEstadoMensaje()
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <section className='py-16 lg:section lg:mb-0 mb-[70px]' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <motion.div className='flex-1 flex justify-start'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Estemos en contacto</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos <br />Juntos!</h2>
            </div>
          </motion.div>
          <motion.form ref={form} action="" className='flex-1 border rounded-lg flex flex-col gap-y-3 pb-[60px] p-6 items-start bg-black bg-opacity-10'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={handleSubmit}>
            <input id='inputNombre' type="text" placeholder='Nombre' name="user_name" value={formData.user_name} onChange={handleChange} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
            {error ? <p className='text-red-700 bg-red-100 border border-red-400 p-1 rounded-md'>{error}</p> : ''}
            <input id='inputEmail' type="text" placeholder='Email' name="user_email" value={formData.user_email} onChange={handleChange} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
            <textarea id="textMensaje" cols="30" rows="1" placeholder='Mensaje' name="message" value={formData.message} onChange={handleChange} className='bg-transparent border-b py-8 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'></textarea>
            <button className='btn btn-lg'>Enviar</button>
            {estadoMensaje ? <p>Mensaje enviado exitosamente!</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
