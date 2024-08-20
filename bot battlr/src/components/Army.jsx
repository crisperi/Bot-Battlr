import { useState, useEffect } from "react";

export default function Army({ army }) {
const [armyBots, setArmyBots] = useState([])

useEffect(()=>{

    
    const addedArmy = army.map((arm)=>{
return (
    <div  key={arm.id} className="w3-third w3-centre w3-red">
                <div>I AM PART OF YOUR ARMY </div>

    <div  className="w3-card-4 w3-dark-grey w3-threequarter  w3-center">
  
    <img  className="w3-image w3-circle" src={arm.avatar_url} alt ="bot" style={{width:'45%'}}/>
    <div className="w3-container w3-centre">
        <p>{arm.name}</p>
        <p>Health: {arm.health}</p>
              <p>Damage: {arm.damage}</p>
              <p>Armor: {arm.armor}</p>
       
    </div>
    </div> 
    </div>
)
    })
 setArmyBots(()=>[...addedArmy])   

},[army])



    return (
      <div>
    {armyBots}
      </div>
    );
  }