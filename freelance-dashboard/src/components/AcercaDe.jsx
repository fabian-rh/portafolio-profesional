import './AcercaDe.scss'
const AcercaDe = () => {
  const pdfPath = 'cv_blue.pdf'
  function handleDownload () {
    window.location.href = pdfPath
  }
  return (
    <body>
      <div class='container'>
        <main class='row'>
          <section class='col'>
            <header class='title'>
              <h2>Educación</h2>
            </header>

            <div class='contents'>
              <div class='box'>
                <h4>2013</h4>
                <h3>Tecnológico de Costa Rica</h3>
                <p>Computadores y sistemas operativos</p>
              </div>

              <div class='box'>
                <h4>2020</h4>
                <h3>Tecnológico de Costa Rica</h3>
                <p>
                  Técnico análisis de datos
                  <br></br>
                </p>
              </div>

              <div class='box'>
                <h4>2024</h4>
                <h3>Universidad Cenfotec</h3>
                <p>Bachillerato Ingeniería en Software </p>
                <br></br>
              </div>
            </div>
          </section>

          <section class='col'>
            <header class='title'>
              <h2>Experiencia</h2>
            </header>

            <div class='contents'>
              <div class='box'>
                <h4>2014-2020</h4>
                <h3>Support Analyst - Mackinsey & Co.</h3>
                <p>
                  Experiencia en la implementación y soporte de aplicaciones de
                  gran escala con más de veinte mil usuarios, incluyendo
                  habilidades en el marco de gestión móvil Mobileiron iOS y
                  configuraciones de servidores Windows, así como en el sistema
                  de impresión Uniflow.
                </p>
              </div>

              <div class='box'>
                <h4>2020 - 2022</h4>
                <h3>It Analyst - Mackinsey & Co.</h3>
                <p>
                  Encargado del desarrollo y despliegue de aplicaciones a través
                  de DevOps en la tienda interna de aplicaciones de Windows. •
                  Experiencia en Powershell para automatizar el proceso de
                  instalación de aplicaciones y realizar
                  instalaciones/eliminaciones de forma silenciosa. • Experiencia
                  en el uso de pipelines de integración continua/despliegue
                  continuo (CI/CD) de Azure DevOps para el despliegue y
                  configuración de aplicaciones.
                </p>
              </div>

              <div class='box'>
                <h4>2022 - Actual</h4>
                <h3>Software Developer - IBM</h3>
                <p>
                  Desarrollo de Software con tecnologias en Java y React,
                  utilizando bases de datos IBM DB2 SQL, asi tambien como
                  Typescript
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className='btcv'>
        <a href={pdfPath} download target='_blank'>
          <input
            type='submit'
            className='flat-button'
            value='Descargar CV'
            onClick={e => {
              // e.preventDefault();
              console.log('cv');
            }}
          />
        </a>
      </div>
    </body>
  )
}
export default AcercaDe
