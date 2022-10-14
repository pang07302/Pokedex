
// import useGetJson from '../hooks/useGetJson.jsx';
// import { pokemonListURL } from '../util/genURLs';
// import '../styles/style.css'
// import {  useEffect, useState, useRef, useCallback } from 'react';



// export default function Pokedexs(){
//     const amount = 20;
//     const [beginId, setBeginId] = useState(1);
//     // const [amount, setAmount] = useState(20);
//     const [hasMore, setHasMore] = useState(false);
//     const {status, json} = useGetJson({pokemonListURL, beginId, amount});



  
    
   
    
//     const pokemonList = json; 

    
    

//     function F (){
//         setBeginId(beginId+amount)
        
//     }

   
    
    
//     return(
//         <div className = "section_pokedex"> 
//             {status==="received"
//                 ?
//                     <div>
//                         <div>
//                             navbar
                       
                        
                            
//                         </div>
//                         <div className="row card-row" >
//                             {pokemonList?.map((pokemon,pokemon_index)=>{
//                                     return  (
                                    
//                                         <div className="col-md-3" key={pokemon_index}>
//                                                 <div className="card poke-card">
//                                                     <img className="card-img-top card-img" alt = {pokemon.name} src = {pokemon.sprites.front_default} style={{width:100, height:100 }}></img>
                                                    
//                                                     <div className="card-body">
//                                                         <h5 className="card-title poke-name">{pokemon.name}</h5>
                                                        
//                                                         {pokemon.types.map((type, types_index)=>{
//                                                             return(
//                                                                 <span key={types_index} style={{padding:10, color:"grey"}}>
//                                                                     {type.type.name}
//                                                                 </span>
//                                                             )
//                                                         })}
                                                        
//                                                     </div>
                                                
//                                                 </div>
//                                         </div>
                                    
//                                     )
//                             })}
//                         </div>
//                         <button onClick = {()=>F()}>load more</button>
                        
//                     </div>
               
//                 : 
//                 <div>
//                     loading
//                 </div>
//             }
//      </div>
       
//     )
        



// }



//-----------------
    // function fetchPokemonLimit (url){
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setNextLoad(data.next)
    //         data.results.forEach(element => {
    //             console.log(element.url)
    //             fetchPokemonDetail(element.url)
    //         });
            
    //     })
    //     .finally(() => {
    //         setIsLoading(false)
    //     })
    //     .catch(console.log)        
    // }

    // const fetchPokemonDetail =(url)=> {
    //     console.log(url)
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setPokemons( pokemons =>[...pokemons, data] )
    //     })
    // }

    // async function fetchPokemonLimit(url){
    //     const result = await fetch(url);
    //     const jsonResult = await result.json();
    //     setNextLoad(jsonResult.next)
    //     for (var i=0; i<limit; i++){
    //         await fetchPokemonDetail(jsonResult.results[i].url)
    //     }
    // }