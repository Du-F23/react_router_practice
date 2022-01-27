import React from "react";
import Menu from "../routes/Menu";
import Contenido from "./Contenido";

var img1 = "../img/utvt.png";

var item = [
  {
    id: "01",
    matricula: "222010329",
    img: img1,
    name: "Fernando Duarte Villavicencio",
    grupo: "DSM 53",
    fecha: "21/10/2002",
    genero: "Masculino",
    carrera: "Ingenieria en Sistemas Computacionales",
    universidad: "Universidad Tecnologica del Valle de Toluca",
    pdf: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf",
  },
  {
    id: "02",
    matricula: "2220105359",
    img: img1,
    name: "Juan Velazquez Duarte",
    grupo: "DSM 53",
    fecha: "1/08/2001",
    genero: "Masculino",
    carrera: "Ingenieria en Sistemas Computacionales",
    universidad: "Universidad Tecnologica del Valle de Toluca",
    pdf: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
  },
  {
    id: "03",
    matricula: "2220567359",
    img: img1,
    name: "Clara Alcantara Ezquivel",
    grupo: "IRD 53",
    fecha: "24/08/2001",
    genero: "Femenino",
    carrera: "Ingenieria en Redes",
    universidad: "Universidad Tecnologica del Valle de Toluca",
    pdf: "https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf",
  },
];

export default class Datos3 extends React.Component {
  render() {
    return (
      <div className="conteiner">
        <Menu />
        <h3>Datos desde un array</h3>

        <div>
          <Contenido info={item} />
        </div>
      </div>
    );
  }
}
