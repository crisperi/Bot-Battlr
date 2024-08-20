import { useState ,useEffect} from "react"
import Army from './Army';

export default function Bot({data}){

const [bots,setBots]=useState([]);
const [army,setArmy]=useState([]);

//MAP OVER RECEIVED DATA TO DISPLAY ALL THE BOTS 
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
},
//ONLY RENDER ONCE WHEN DATA IS RECEIVED 
[data])


//FUNCTION TO ADD A BOT TO YOUR ARMY 
   function handleAdd(e,botId) {
    e.preventDefault ;
   
    const addBot = data.find(bot => bot.id === botId)
console.log(addBot)
    setArmy(prevArmy=>[...prevArmy,addBot])

 


   }
        
   console.log(army)
   


    return (
        <>
        <Army army={army} />
       {bots}
        </>
    )
}