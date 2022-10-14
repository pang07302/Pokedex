
// import { useEffect, useState } from 'react';


// export default function useGetJson( props ){

//     const [status, setStatus] = useState('init');
//     const [json, setJson] = useState([]);
//     const {pokemonListURL, beginId, amount} = props;
//     console.log(beginId, beginId+amount)
   

//     useEffect(() => {
//         let isMounted = true;
//         async function getJson(){
//             try{
//                 setStatus("requesting");
               
//                 if (isMounted){   
//                     const jsonResult = [];
//                     for(var i=beginId; i<beginId+amount; i++){
//                         jsonResult.push(await returnJson("https://pokeapi.co/api/v2/pokemon/"+`${i}`))
//                         console.log(i)
//                     }
                  
//                     if (jsonResult){
//                         setJson(jsonResult)
//                         setStatus("received");

//                     }else{
//                         setStatus("error");
//                     }
//                 }
//             }catch(error){
//                 setStatus("error");
//             }   
//         }

//         getJson();
    
//         return ()=> {
//             isMounted = false;
//         }
//     }, [beginId]);

//     return {
//         status,
//         json
//     }
// }

// const returnJson = async(url) => {

//     const result = await fetch(url);
//     const jsonResult = await result.json();
//     return jsonResult;
// }




