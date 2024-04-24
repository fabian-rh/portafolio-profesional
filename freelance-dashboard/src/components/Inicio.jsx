import './Inicio.scss'
import { useEffect, useState } from 'react'
import LetrasAnimadas from './LetrasAnimadas/LetrasAnimadas'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const Inicio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterClassAbout, setLetterClassAbout] = useState('text-animate')
  const nameArray = [' ', 'R', 'e', 't', 'a', 'n', 'a']
  const jobArray = [
    'd',
    'e',
    's',
    'a',
    'r',
    'r',
    'o',
    'l',
    'l',
    'a',
    'd',
    'o',
    'r',
    ' ',
    'w',
    'e',
    'b',
  ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Cleanup function to clear the timeout when the component unmounts or the effect changes
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className='container-global'>
      <div className='container home-page'>
        <div className='page'>
          <span className='tags top-tags'>&lt;html&gt;</span>
          <br />
          <span className='tags top-tags'>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
          </span>

          {/* <div className='container home-page'> */}
          <div className='text-zone'>
            <h1>
              &nbsp;Hola, Soy Fabián
              <LetrasAnimadas
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <LetrasAnimadas
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>Frontend / Backend</h2>
            <Link to='/contacto' className='flat-button'>
              CONTÁCTAME
            </Link>
          </div>
          <br />
          <br />
          {/* </div> */}
        </div>
        {/* {About} */}
        <>
          <br />
          <br />
          <br />
          <div className='container-about-page'>
            <div className='text-zone-about'>
              <h1 className='titulo-about'>
                <LetrasAnimadas
                  letterClass={letterClass}
                  strArray={[
                    'A',
                    'c',
                    'e',
                    'r',
                    'c',
                    'a',
                    ' ',
                    'd',
                    'e',
                    ' ',
                    'm',
                    'í',
                  ]}
                  idx={15}
                />
              </h1>
              <p className='parrafo'>
                Desarrollador de software con experiencia en front-end y
                back-end utilizando herramientas tecnológicas como Java, IBM SQL
                y Struts e interfaces de usuario React, Typescript y Redux
                Además, con experiencia con scripts en Powershell y la
                plataforma Azure DevOps.
              </p>
              <p className='parrafo' align='LEFT'>
                Mi misión es Desarrollar productos de alta calidad, escalables y
                fáciles de implementar para proporcionar soluciones de valor a
                mis clientes, utilizando teccnologías y metodologías modernas
                contribuyendo al éxito de sus proyectos.
              </p>
              <p className='parrafo'>
                Mi visión es ser un referente en el ámbito del desarrollo de
                software, destacando mi excelencia técnica, creatividad y
                compromiso con la satisfacción del cliente.
              </p>
            </div>
          </div>
        </>
        <span className='tags bottom-tags'>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
      <div className='container-cubo'>
        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </div>
  )
}
export default Inicio
