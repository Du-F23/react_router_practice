import React from "react";
import Menu from "../routes/Menu";
import Contenido2 from "./Contenido2";


var img = 'https://via.placeholder.com/150';
var pdf = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
var fecha = "08/02/22"
var nombre = "EStado inicial del componente"


export  default class Data03 extends  React.Component{
    render() {
        return(
            <div>
                <Menu/>
                <h1>Estados iniciales del componentesssss </h1>
                <Contenido2 img={img}   pdf={pdf} nombre={nombre} fecha={fecha}/>
            </div>
        );
    }
}