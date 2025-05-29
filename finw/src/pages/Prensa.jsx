import React from 'react';
import '../assets/PrensaPage.css';
import Banner from '../img/foto7.png'; 

const noticias = [
    {
        id: 1,
        imagen: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2211327891-20250422231653387.jpg?c=16x9&q=h_144,w_256,c_fill',
        titulo: 'Las acciones de EE.UU. se recuperan mientras el secretario del Tesoro dice que la guerra comercial con China es insostenible',
        resumen: 'Este es un breve resumen de la noticia 1.',
        link: 'https://cnnespanol.cnn.com/2025/04/22/economia/acciones-estadounidenses-oro-maximo-historico-trax'
      },
      {
        id: 2,
        imagen: 'https://staticmer2.emol.cl/Fotos/2025/04/22/file_20250422131020.jpg',
        titulo: 'La nueva amenaza para la recuperación de SQM ya está aquí',
        resumen: 'Este es un breve resumen de la noticia 2.',
        link: 'https://www.elmercurio.com/inversiones/'
      },
      {
        id: 3,
        imagen: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2211327891-20250422231653387.jpg?c=16x9&q=h_144,w_256,c_fill',
        titulo: 'Las acciones de EE.UU. se recuperan mientras el secretario del Tesoro dice que la guerra comercial con China es insostenible',
        resumen: 'Este es un breve resumen de la noticia 1.',
        link: 'https://cnnespanol.cnn.com/2025/04/22/economia/acciones-estadounidenses-oro-maximo-historico-trax'
      },
  // Puedes seguir agregando más noticias de prensa aquí...
];

const Prensa = () => {
  return (
    <div className="prensa">
      <img src={Banner} alt="Banner Prensa" className="banner-img" />

      <h1 className='titulo-prensa'>PRENSA</h1>

      <div className="noticias-grid">
        {noticias.map(noticia => (
          <a key={noticia.id} href={noticia.link} className="noticia">
          <img src={noticia.imagen} alt={noticia.titulo} />
          <div className="noticia-content">
            <h3>{noticia.titulo}</h3>
            <p>{noticia.resumen}</p>
          </div>
        </a>
        
        ))}
      </div>
      <button className='verM'>Ver más</button>
    </div>
  );
};

export default Prensa;