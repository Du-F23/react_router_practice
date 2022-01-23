import Menu from '../routes/Menu';

export default function Datos0(props) {
    return (
    <div>
        <Menu/>
        <h3>{props.titulo}</h3>
        <br/>
        <img src={props.img} alt="Imagen Traida desde un index"/>
        <br/>
        <p><b>La fecha actual es: </b>{props.date}</p>
    </div>)
}