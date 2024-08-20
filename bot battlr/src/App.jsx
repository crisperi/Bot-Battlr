import {useState, useEffect} from 'react'


import BotCollection from "./components/BotCollection"




function App() {
 const[data,setData]=useState([])

 useEffect(()=>{
  let url ="http://localhost:3000/bots"
  fetch (url)
  .then(res=>res.json())
  .then(dataBots=>setData(()=>dataBots))

 },[]
 );
 console.log(data)



  return (
    <>
   
    <BotCollection data={data}/>
    </>
  )
}

export default App
