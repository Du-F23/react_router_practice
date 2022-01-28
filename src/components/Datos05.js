import React from "react";
import Menu from "../routes/Menu";
import Contenido3 from "./Contenido3";
import img1 from "../img/images.png"


var id='01';
var img= img1;
var name= 'Fernando Duarte Villavicencio';
var edad= '18';
var matricula='222010329';
var genero= 'Masculino';
var fecha= '21/02/2020';
var carrera= 'Ingenieria en Sistemas Computacionales';
var grupo= 'DSM 53';
var universidad= 'Universidad Tecnologica del Valle de Toluca';
var pdf= 'http://www.africau.edu/images/default/sample.pdf';


export  default class Datos5 extends  React.Component{
    render() {
        return(
            <div className="conteiner">
                <Menu/>
                <h1>Estados iniciales del componentesssss </h1>
                <Contenido3 
                id = {id}
                img = {img}
                name = {name}
                edad = {edad}
                matricula = {matricula}
                genero = {genero}
                fecha = {fecha}
                carrera = {carrera}
                grupo = {grupo}
                universidad = {universidad}
                pdf = {pdf}
                />
            </div>
        );
    }
}