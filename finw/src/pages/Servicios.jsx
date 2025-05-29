import ejecutivo from '../img/imagen2.png'
import pc from '../img/pc.png';
import asesoriaE from '../img/mano2.png'

function Servicios() {
    return (
        <div className="contenido-flex-servicios">
      <img src={ejecutivo} alt="Presentación de servicios" />
      <br />
      <br />
      <div className="texto-home-servicios">
        <h1 className="titulo-servicios">SERVICIOS</h1>
        <div className="seccion-servicio">
          <h5 className="titulo-servicio">Finanzas corporativas</h5>
          <ul className="lista-servicios">
            <li>Valorización Económica de Compañías</li>
            <li>Valorización Económica de Fondos y Activos Alternativos</li>
            <li>Análisis de rentabilidad económica</li>
            <li>Asesoría de derivados y política de cobertura cambiaria</li>
            <li>Tasas de costo de capital</li>
            <li>Precios de transferencia</li>
          </ul>
        </div>

        <div className='seccion-servicio'><img src={pc} alt="" /></div>

        <div className="seccion-servicio asesoramiento-con-imagen">
        <div className="asesoramiento-imagen">
            <img src={asesoriaE} alt="Asesoría Económica" />
          </div> 
          <div className="asesoramiento-texto2">
            <h5 className="titulo-servicio2">Asesoría económica</h5>
            <ul className="lista-servicios2">
              <li>Informes periciales</li>
              <li>Arbitrajes y litigios</li>
              <li>Estudios económicos sectoriales</li>
              <li>Políticas públicas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Servicios;