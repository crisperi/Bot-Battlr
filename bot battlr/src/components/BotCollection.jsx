import Bot from './bot'


export default function Bots({data}) {

function onDishcharge(botId){
    console.log(botId)
}


    return (
        <div className='w3-container w3-row'>
        
        <Bot  data={data}  onDishcharge={onDishcharge}/>
        </div>
    )
}