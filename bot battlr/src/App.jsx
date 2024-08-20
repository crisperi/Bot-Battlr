import { useState, useEffect } from 'react'
import BotCollection from "./components/BotCollection"
import Bot from "./components/Bot"
import Army from "./components/Army"

function App() {
  const [data, setData] = useState([]) 

  // Import  data from the localhost 
  useEffect(() => {
    let url = "http://localhost:3000/bots"
    fetch(url)
      .then(res => res.json())
      .then(dataBots => setData(() => dataBots))
  }, [])

  console.log(data)

  // Function to handle bot discharge (both backend and frontend)
  const handleDischarge = (botId) => {
    // 1. Make a request to the backend to delete the bot (replace with your actual backend logic)
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log(`Bot with ID ${botId} deleted successfully`);
          // Update the data state to reflect the deleted bot
          setData(prevData => prevData.filter(bot => bot.id !== botId));
        } else {
          console.error(`Error deleting bot with ID ${botId}`);
        }
      })
      .catch(error => {
        console.error(`Error deleting bot: ${error}`);
      });
  };

  return (
    <>
      <Bot data={data} onDischarge={handleDischarge} /> {/* Pass handleDischarge function */}
      <BotCollection data={data} />
    </>
  )
}

export default App
