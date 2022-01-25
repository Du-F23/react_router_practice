import img from '../img/cuervi.jpeg';
import Menu from '../routes/Menu';

import header from '../img/utvt.png';
import logo from '../img/cuervi.jpeg';
import persona from '../img/persona.jpeg';
import '../css/style.css';
import Credencial from '../components/Credencial';



const fecha='Inscrito el 13 de Enero del 2022';


export default function Home(props){
    return(
        <div>
            <Menu/>
            <h3>Home</h3>

            <img src={img} className="img-fluid" alt="Imagen del cuervo logo de la UTVT"/>


            <Credencial matricula='222010329' header={header} logo={logo} persona={persona} nombre='Fernando Duarte Villavicencio' grupo='DSM 53' fecha='21/10/2002' texto='Esta credencial certifica que la persona mencionada' texto2=' es estudiante de la UTVT' inscripcion={fecha}/>
        </div>
    )
}