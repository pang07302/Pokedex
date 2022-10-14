import Navbar from "./layout/Navbar";
import Pokedex from "./Pokedex";
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home(){

    return(
        <div className="homepage">
            <Navbar/>
            <Pokedex/>
            
        </div>
    );
}