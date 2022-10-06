
import { useEffect, useState } from 'react';


export default function useGetJson( url, amount ){

    const [status, setStatus] = useState('init');
    const [json, setJson] = useState([]);
   

    useEffect(() => {
        let isMounted = true;
        async function getJson(){
            try{
                setStatus("requesting");
                
                if (isMounted){   
                    const jsonResult = [];
                    for(var i=1; i<amount; i++){
                        jsonResult.push(await returnJson(url+`${i}`))
                

                    }
                    if (jsonResult){
                        setJson(jsonResult)
                        setStatus("received");

                    }else{
                        setStatus("error");
                    }
                }
            }catch(error){
                setStatus("error");
            }   
        }

        getJson();
    
        return ()=> {
            isMounted = false;
        }
    }, []);

    return {
        status,
        json
    }
}

const returnJson = async(url) => {

    const result = await fetch(url);
    const jsonResult = await result.json();
    return jsonResult;
}




