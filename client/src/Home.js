import {useEffect,useState} from 'react'
import PickupList from './PickupList'

function Home() {
// const [clientPickup, setClientPickup]=useState(true)
const [items,setItems]=useState([]) 
const itemURL = '/items'

useEffect(()=>{
 fetch(itemURL)
 .then(res => res.json())
 .then((allItems) => setItems(allItems))
},[])

console.log(items)

    return (
     <div>
     <PickupList allItems = {items}/>
     </div>
    )
}

export default Home