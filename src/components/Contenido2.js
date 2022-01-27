import React from "react";
import img1 from "../img/images.png"
export default class Contenido2 extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            img: img1,
            pdf: 'http://www.africau.edu/images/default/sample.pdf',
            fecha: '----------',
            nombre: 'FOOBAR'
        }
    }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                img: this.props.img,
                pdf: this.props.pdf,
                fecha: this.props.fecha,
                nombre: this.props.nombre,
            })
        },5000)
    }

    render() {
        const {img, pdf, nombre, fecha} = this.state
        return (<div>

            <h3>Componenete - Contenido 04</h3>
            <img src={img} style={{height: '150px'}}/>
            <a href={pdf} alt="Hola">Archivo de descarga PDF</a>
            <p> {nombre}</p>
            <p>{fecha}</p>
            <hr/>
        </div>)
    }
}