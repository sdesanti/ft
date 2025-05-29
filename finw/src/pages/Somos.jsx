import manos from '../img/manos.png';

function Somos() {
    return (
        <div className="contenido-flex-somos">
  <img className='imagen-izquierda-somos'
    src={manos}
  />
  <div className="texto-home-somos">
    <h1 className="titulo-somos">QUIENES SOMOS</h1>
    <div className="parrafos-somos">
      <h3>Misión</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        consectetur ipsum molestias facilis qui ea ipsam blanditiis in
        molestiae distinctio quas corrupti inventore sequi animi voluptate, id
        excepturi facere soluta.
      </p>
      <h3>Visión</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        consectetur ipsum molestias facilis qui ea ipsam blanditiis in
        molestiae distinctio quas corrupti inventore sequi animi voluptate, id
        excepturi facere soluta.
      </p>
    </div>
  </div>
</div>

    );
}
export default Somos; 