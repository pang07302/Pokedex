
export async function FetchPokemon(url,amount){
    const jsonResult = [];
    for(var i=1; i<=amount; i++){
        await jsonResult.push(await returnJson(url+`${i}`))
    }
    console.log(jsonResult)
    
    return jsonResult;
}
const returnJson = async(url) => {
    const result = await fetch(url);
    const jsonResult = await result.json();
    return jsonResult;
}