import React from "react";

export default class Contenido extends React.Component {
  render() {
    return (
      <div>
        <h3>Contenido recorriendo información</h3>
        <br />
        {this.props.info.map((item) => {
          return (
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <img src={item.img} alt="Imagen del cuervo" />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.id}:{item.name}
                    </h5>
                    <p className="card-text">Matricula: {item.matricula}</p>
                    <p className="card-text">Grupo: {item.grupo}</p>
                    <p className="card-text">Fecha Nacimiento: {item.fecha}</p>
                    <p className="card-text">Genero: {item.genero}</p>
                    <p className="card-text">Carrera: {item.carrera}</p>
                    <p className="card-text">Universidad: {item.universidad}</p>
                    <a href={item.pdf}>
                      <button type="button" class="btn btn-outline-success">
                        Descarga
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
