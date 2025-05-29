import '../assets/Gal.css'; // para estilos personalizados
import Capital from '../img/AFP_Capital_logotipo.png';
import BancoCh from '../img/Banco_de_Chile_Logo.png';
import Santa from '../img/logo banco santander.png';

const imagenes = [
  Capital,
  BancoCh,
  Santa,
  'https://via.placeholder.com/300x200?text=Imagen+4',
  'https://via.placeholder.com/300x200?text=Imagen+5',
  'https://via.placeholder.com/300x200?text=Imagen+6',
];

const Galeria = () => {
  return (
    <div className="container py-4">
      <div className="gal-grid">
        {imagenes.map((src, index) => (
          <div key={index} className="gal-item">
            <img src={src} alt={`Imagen ${index + 1}`} className="img-fluid rounded shadow-sm" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;