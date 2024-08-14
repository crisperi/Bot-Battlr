import {useState, useEffect} from 'react'


import Bots from "./components/bots"




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
    <Bots data={data}/>
    </>
  )
}

export default App
