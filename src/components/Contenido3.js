import React from "react";
import '../css/style.css';

export default class Contenido3 extends React.Component {
//La informacion de datos 5 es mandada aquí y con el constructor le ordenamos que hacer, 
    constructor(props) {
        super(props);
        this.state={
          //Son datos que se van a componente primero y se actualizaran despues
            id: 'undefined',
            img: 'https://via.placeholder.com/150',
            name: 'undefined',
            edad: 'undefined',
            matricula:'undefined',
            genero: 'undefined',
            fecha: 'undefined',
            carrera: 'undefined',
            grupo: 'undefined',
            universidad: 'undefined',
            pdf: 'http://www.africau.edu/images/default/sample.pdf',
        }
    }
  //Aquí le decimos que campo pertene a cada uno y con setTimeout le damos el tiempo que tarda en actualizar los datos
    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                id: this.props.id,
                img: this.props.img,
                name: this.props.name,
                edad: this.props.edad,
                matricula: this.props.matricula,
                genero: this.props.genero,
                fecha: this.props.fecha,
                carrera: this.props.carrera,
                grupo: this.props.grupo,
                universidad: this.props.universidad,
                pdf: this.props.pdf,
            })
        },5000)
    }

    render() {
        const {id, img, name, edad, matricula, genero, fecha, carrera, grupo, universidad, pdf} = this.state
        return (<div>

            <h3>Credencial - Contenido 3</h3>

            
            <hr/>
            <br/>
            <div className="card" alignContent="flex-end">
            <img src={img} style={{height: '150px'}} id="imagen" className="grid-info"/>
            <div className="card-body">
            <p className="card-text">Id: {id}</p>
            <p className="card-text">Name: {name}</p>
            <p className="card-text">Matricula: {matricula}</p>
            <p className="card-text">Edad: {edad}</p>
            <p className="card-text">Genero: {genero}</p>
            <p className="card-text">Fecha Nacimiento: {fecha}</p>
            <p className="card-text">Carrera: {carrera}</p>
            <p className="card-text">Grupo: {grupo}</p>
            <p className="card-text">Universidad: {universidad}</p>
            <a href={pdf} alt="Hola"><button className="button is-primary is-dark">Archivo de descarga PDF</button></a>
            </div>
            </div>
            <hr/>
        </div>)
    }
}
