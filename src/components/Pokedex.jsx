
import useGetJson from '../hooks/useGetJson.jsx';
import { pokemonListURL } from '../util/genURLs';
import '../styles/style.css'


export default function Pokedex(){
    const amount = 151;
    const {status, json} = useGetJson(pokemonListURL(), amount);
    
    const pokemonList = json; 
    console.log(pokemonList)
    
    
    return(
        <div className = "section_pokedex"> 
            {status==="received"
                ?
                    <div>
                        <div>
                            navbar
                            
                        </div>
                        <div className="row card-row">
                            {pokemonList.map((pokemon,pokemon_index)=>{
                                    return (pokemon_index<20)&& (
                                    
                                        <div className="col-md-3" key={pokemon_index}>
                                                <div className="card poke-card">
                                                    <img className="card-img-top card-img" alt = {pokemon.name} src = {pokemon.sprites.front_default} style={{width:100, height:100 }}></img>
                                                    
                                                    <div className="card-body">
                                                        <h5 className="card-title poke-name">{pokemon.name}</h5>
                                                        
                                                        {pokemon.types.map((type, types_index)=>{
                                                            return(
                                                                <span key={types_index} style={{padding:10, color:"grey"}}>
                                                                    {type.type.name}
                                                                </span>
                                                            )
                                                        })}
                                                        
                                                    </div>
                                                
                                                </div>
                                        </div>
                                    
                                    )
                            })}
                        </div>
                    </div>
               
                : 
                <div>
                    loading
                </div>
            }
     </div>
       
    )
        



}