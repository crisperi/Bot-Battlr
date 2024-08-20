import { useState, useEffect } from "react";
import Army from './Army';

export default function Bot({ data }) {
  const [army, setArmy] = useState([]);

// Function to add a bot to your army
  function handleAdd(e, botId) {
    e.preventDefault();
    const isBot = army.some(bot => bot.id === botId);

    // check in order not to add a bot twice 

    if (!isBot) {
      const addBot = data.find(bot => bot.id === botId);
      if (addBot) {
        //update army state if its true 
        setArmy(prevArmy => [...prevArmy, addBot]);
      }
    }
  }

  //receive botId from child to remove from army 
  const removeBot = (botId) => {
    setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
  };

// Render the list of bots and the army
  return (
    <>
      <Army army={army} removeBot={removeBot} />
      {data.map(bot => (
        <div key={bot.id} className="w3-third w3-center">
          <div className="w3-card-4 w3-dark-grey w3-threequarter w3-center">
            <img className="w3-image w3-circle" src={bot.avatar_url} alt="bot" style={{ width: '45%' }}/>
            <div className="w3-container w3-center">
              <p className="w3-large">{bot.name}</p>
              <button className="w3-btn w3-green" onClick={(e) => handleAdd(e, bot.id)}>Add to Army</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}