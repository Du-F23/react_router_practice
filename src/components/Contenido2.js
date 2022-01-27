import React from "react";
import img1 from "../img/images.png";

export default class Contenido2 extends React.Component{

constructor(props){
    super(props);
    this.state = {
        img: img1,
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
        texto:'Texto mandado a traer desde el constructor',
        datos: 'Datos mandados a traer desde el constructor',
    }
}

    render(){
        return(
            <div>
                <h3>Contenido 2</h3>
                <img src={img} alt=""/>
                <a href={pdf}><button className="btn btn-outline-success">UTVT</button></a>

                <hr/>
                {texto} {datos}
            </div>
        )
    }
}