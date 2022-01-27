import React from "react";
import img from "../img/images.png";

export default class Contenido2 extends React.Component{

constructor(props){
    super(props);
    this.state = {
        img: img,
        pdf: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
        texto:'Texto mandado a traer desde el constructor',
        datos: 'Datos mandados a traer desde el constructor',
    }
}

componentDidMount(){
    setTimeout(() => {
this.setState({
    img: this.props.img,
    pdf: this.props.pdf,
    texto: this.props.texto,
    datos: this.props.datos,
},5000)
    })
}

    render(){
        const {img, pdf, texto, datos} = this.state
        return(
            <div>
                <h3>Contenido 2</h3>
                <img src={img} alt="Imagen Props"/>
                <a href={pdf}><button className="btn btn-outline-success">UTVT</button></a>
                <hr/>
                {texto}
                {datos}
            </div>
        )
    }
}