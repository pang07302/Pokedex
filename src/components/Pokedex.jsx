import React, {useEffect, useState, useRef, useCallback} from 'react';
import { pokemonLimitURL } from '../util/genURLs';
import '../styles/pokedexStyle.css'


export default function Pokedex() {
    const limit = 20;
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nextLoad, setNextLoad] = useState(pokemonLimitURL(limit))
    const dataFetchedRef = useRef(false)
    // use useRef to keep track of a boolean. If it’s true, we’ve already been here, and we can return. If it is false, we can perform our fetch and then update the ref.
    
    const fetchPokemonLimit = useCallback(async(url) => {
        const result = await fetch(url);
        const pokemonlimit = await result.json();
        setNextLoad(pokemonlimit.next)
        for (var i=0; i<limit; i++){
            await fetchPokemonDetail(pokemonlimit.results[i].url)
        }    
    }, [])

    const fetchPokemonDetail=async(url)=>{
        const result = await fetch(url);
        const pokemonDetail = await result.json();
        setPokemons(pokemons=>[...pokemons, pokemonDetail])
    }

    useEffect(()=>{
        try {
            if (dataFetchedRef.current) return
            setIsLoading(true)
            dataFetchedRef.current = true
            fetchPokemonLimit(nextLoad)  
        }catch (error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    },[fetchPokemonLimit,nextLoad])



    return (
        <div className = "section_pokedex"> 
            {!isLoading
                ?
                    <div>
                        <div className="row card-row" >
                            {pokemons?.map((pokemon,pokemon_index)=>{
                                return  (
                                
                                    <div className="col-md-3" key={pokemon_index}>
                                            <div className="card poke-card">
                                                <img className="card-img-top card-img" alt = {pokemon.name} src = {pokemon.sprites.front_default} style={{width:100, height:100 }}></img>
                                                
                                                <div className="card-body">
                                                    <h6>No. {pokemon.id}</h6>
                                                    <h5 className="card-title poke-name">{pokemon.name}</h5>
                                                    
                                                    {pokemon.types.map((type, types_index)=>{
                                                        return(
                                                            <span key={types_index} style={{padding:10, color:"grey"}}>
                                                                {type.type.name}
                                                            </span>
                                                        )
                                                    })}
                                                    
                                                </div >
                                            
                                            </div>
                                    </div>
                                
                                )
                            })}
                        </div>
                        <button onClick = {()=>fetchPokemonLimit(nextLoad)}>load more</button>                
                    </div>
               
                : 
                <div>
                    loading
                </div>
            }
     </div>
    );
}
