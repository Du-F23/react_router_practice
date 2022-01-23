import img from '../img/cuervi.jpeg';
import Menu from '../routes/Menu';

export default function Home(){
    return(
        <div>
            <Menu/>
            <h3>Home</h3>

            <img src={img} className="img-fluid" alt="Imagen del cuervo logo de la UTVT"/>
        </div>
    )
}