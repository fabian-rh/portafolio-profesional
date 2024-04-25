import LetrasAnimadas from './LetrasAnimadas/LetrasAnimadas'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contacto.scss'
import wapp from '../assets/wapp.png'
import ghub from '../assets/github-mark.png'
import linkedin from '../assets/linkedin.png'

const Contacto = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup function to clear the timeout when the component unmounts or the effect changes
    return () => clearTimeout(timeoutId)
  }, [])

  // const sendEmail = (e) => {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm('service_nldof2v', 'template_rhryp7d', form.current)
  //     .then(
  //       (response) => {
  //         console.log('SUCCESS!', response.status, response.text);
  //         window.location.reload(false)
  //       },
  //       (error) => {
  //         console.log('FAILED...', error);
  //         window.location.reload(false)
  //       }
  //     )
  // }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm('service_nldof2v', 'template_rhryp7d', form.current, {
        publicKey: 'RQWU6OEW-DnQ9_UVK',
      })
      .then(
        () => {
          console.log('SUCCESS!')
        },
        error => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <>
      <div className='container-principal'>
        <div className='left-container'>
          <div className='container-contact-page'>
            <div className='text-zone'>
              <h1>
                <LetrasAnimadas
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                Estoy interesado en oportunidades de trabajo
                freelance,especialmente en proyectos ambiciosos o grandes. Sin
                embargo, si tienes alguna otra solicitud o pregunta, no dudes en
                contactarme utilizando el formulario a continuación.
              </p>
              <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className='half'>
                      <input
                        placeholder='Nombre'
                        type='text'
                        name='user_name'
                        required
                      />
                    </li>
                    <li className='half'>
                      <input
                        placeholder='Email'
                        type='email'
                        name='user_email'
                        required
                      />
                    </li>
                    <li>
                      <input
                        placeholder='Titulo'
                        type='text'
                        name='titulo'
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder='Mensaje'
                        name='message'
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input
                        type='submit'
                        className='flat-button'
                        value='Send'
                        // onClick={(e) => {
                        //   // e.preventDefault();
                        // }}
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div></div>
          </div>
          <div className='contactos'>
            <div className='wapp'>
              <a
                href='https://api.whatsapp.com/send?phone=50664405384'
                target='_blank'
                rel='noreferrer'
              >
                <img src={wapp} alt='WhatsApp Icon' width='70' />
              </a>
            </div>
            <div className='ghub'>
              <a
                href='https://github.com/fabian-rh'
                target='_blank'
                rel='noreferrer'
              >
                <img src={ghub} alt='Github' width='70' />
              </a>
            </div>
            <div className='lin'>
              <a
                href='https://www.linkedin.com/in/fabian-retana/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedin} alt='Github' width='70' />
              </a>
            </div>

          </div>
        </div>
        <div className='right-container'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0308362322694!2d-84.06672768927913!3d9.931389874170314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3f13462cc7b%3A0x97219232a6ee2da8!2sUniversidad%20CENFOTEC!5e0!3m2!1ses-419!2scr!4v1713937073026!5m2!1ses-419!2scr'
            width='700'
            height='550'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </>
  )
}
export default Contacto
