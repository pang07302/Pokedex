
import { useEffect, useState } from 'react';


export default function useGetJson( url ){

 const [status, setStatus] = useState('init');
 const [json, setJson] = useState([]);

 
    useEffect(() => {
        let isMounted = true;
        async function getJson(){
            try{
                setStatus("requesting");
                
                let jsonResult = await (returnJson(url));

                if (isMounted){    
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


