import compu from '../img/pc2.png';

function Contacto() {
    return (
        <div className="contenido-flex-somos">
            <img
                src={compu}
                width="249"
                height="792"
                alt="plantas"
                className="imagen-izquierda-somos"
            />
            <div className="texto-home-somos">
                <h1 className="titulo-contacto">CONTACTO</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    consectetur ipsum molestias facilis qui ea ipsam blanditiis in
                    molestiae distinctio quas corrupti inventore sequi animi voluptate, id
                    excepturi facere soluta.
                </p>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre y apellido</label>
                            <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            />

                        <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
