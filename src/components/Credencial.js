export default function Credential(props){
    return (
      <div className="card">
        <div className="decoration-layer">
          <img src={props.header} className="header-img" alt="" />
          <img src={props.logo} className="logo-img" />
          <img src={props.persona} className="placeholder2" />

          <div className="grid-info">
            <div className="placeholder"></div>

            <div className="item3">
              <p>Matricula:</p>
              <p>Nombre:</p>
              <p>Grupo:</p>
              <p>Fecha N.:</p>
            </div>
            <div className="item4">
              <p></p>
              <p>{props.matricula}</p>
              <p>{props.nombre}</p>
              <p>{props.grupo}</p>
              <p>{props.fecha}</p>
            </div>

            <div class="item5">
              <p>{props.texto}</p>
              <p>{props.texto2}</p>
            </div>
            <div class="item6">
              <p>{props.inscripcion}</p>
            </div>
          </div>
        </div>
      </div>
    );
}