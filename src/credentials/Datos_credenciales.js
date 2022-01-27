import React from "react";
import Menu from "../routes/Menu";
import Mostrar from "./Mostrar_Credenciales";

//Importar imagenes
import img_clara from "./img_credentials/clara.jpeg";
import img_neri from "./img_credentials/neri.gif";
import img_alo from "./img_credentials/alondra.jpeg";

var item = [
    {
        id: '01',
        matricula: '222010329',
        img: '../img/utvt.png',
        name: 'Fernando Duarte Villavicencio',
        grupo: 'DSM 53',
        fecha: '21/10/2002',
        genero: 'Masculino',
        carrera: 'Ingenieria en Sistemas Computacionales',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf',
    },
    {
        id: '02',
        matricula: '5687933461',
        img: img_neri,
        name: 'Maria del Carmen Hernández Neri',
        grupo: 'DSM 45',
        fecha: '18/08/2004',
        genero: 'Femenino',
        carrera: 'Ingenieria en Software',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://1drv.ms/b/s!Ap6I0JfsoffruyLR5nkZLyF0j0Eu?e=HNQUrZ',
    },
    {
        id: '03',
        matricula: '222111704',
        img: img_clara,
        name: 'Clara Alcantara Ezquivel',
        grupo: 'IRD 53',
        fecha: '02/12/2002',
        genero: 'Femenino',
        carrera: 'Licenciatura en Administracion',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf',
    },
    {
        id: '04',
        matricula: '12423543265',
        img: '../img/utvt.png',
        name: 'Perla Javier Zarco',
        grupo: 'DNM 53',
        fecha: '18/12/2002',
        genero: 'Femenino',
        carrera: 'Licenciatura en Mercadotecnia',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf',
    },
    {
        id: '05',
        matricula: '35243245',
        img: img_alo,
        name: 'Alondra Rodea Carrillo',
        grupo: 'DSM 53',
        fecha: '17/03/2004',
        genero: 'Femenino',
        carrera: 'Ingenieria en Sistemas Computacionales',
        universidad: 'Universidad Tecnologica del Valle de Toluca',
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
    }
];

export default class Datos extends React.Component {
    render(){
        return(
            <div className="conteiner">
                <Menu/>
                <h3>Credenciales Ejemplos</h3>
                <div>
                    <Mostrar info={item}/>
                </div>
            </div>    
        )
    }
}
