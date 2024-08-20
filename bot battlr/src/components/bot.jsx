import { useState ,useEffect} from "react"
import Army from './Army';

export default function Bot({data}){

const [bots,setBots]=useState([]);
const [army,setArmy]=useState([]);


useEffect(()=>{

    const mapped =data.map((bot)=>{
        return(
            <div  key={bot.id} className="w3-third w3-centre">
            <div  className="w3-card-4 w3-dark-grey w3-threequarter  w3-center">
            <img  className="w3-image w3-circle" src={bot.avatar_url} alt ="bot" style={{width:'45%'}}/>
            <div className="w3-container w3-centre">
                <p>{bot.name}</p>
                <button onClick={(e)=>handleAdd(e,bot.id)}>Add to Army</button>
            </div>
            </div> 
            </div>
        )
        })
        setBots([mapped])
},[data])

   function handleAdd(e,botId) {
    e.preventDefault ;
    console.log(botId)
    



   }
        



    return (
        <>
        <Army  />
       {bots}
        </>
    )
}