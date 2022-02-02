import React from "react";
import { Link } from "react-router-dom";
import Menu from "../routes/Menu";
import img1 from "../img/utvt.png";
import img2 from "../img/cuervi.jpeg";
import img3 from "../img/persona.jpeg";


export default class Card extends React.Component{
    render(){
        return(
            <div className="conteiner">
                <Menu />
                <br/>
                <hr/>
                <h3>Credential Students</h3>
                <br/>
                <hr/>
                <div style={{border:"2px solid black", borderRadius:"15px", width:"550px", backgroundColor:"#fff", color:"#000"}}>
                    <div style={{border:"2px solid #2ecb46", borderRadius:"15px", padding:"10px"}}>
                        <img src={img1} style={{width:"500px"}} alt="Imagen 1"/>
                        <table style={{backgrond:'url('+img2+')no-repeat botton rigth'}}>
                            <tbody>
                            <tr>
                                <td rowSpan="5" style={{justifyContent:"center"}}>
                                    <img src={img3} style={{border:"3px solid #2ecb46", heigth:"150px"}} alt="Imagen 2"/>
                                </td>
                                <td><b>Matricula</b></td>
                                <td>222010329</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Nombre: </b>
                                </td>
                                <td>Duarte Villavicencio Fernando</td>
                            </tr>
                            <tr>
                                <td><b>Fecha N.</b></td>
                                <td>
                                    21/10/2002
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <i><b>Certifica que la persona mencionada es estudiante de la Universidad Tecnologica del Valle de Toluca</b></i>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2"><b><i>Inscrito el 11 de Enero del 2022</i></b></td>
                                <td style={{textAling:"right"}}>UTVT</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}