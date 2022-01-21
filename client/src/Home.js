import {useEffect,useState} from 'react'
import PickupList from './PickupList'
import Search from './Search'

function Home() {
 const [items,setItems]=useState([])
 const [search, setSearch]=useState("") 
 const itemURL = '/items'

useEffect(()=>{
 fetch(itemURL)
 .then(res => res.json())
 .then((allItems) => setItems(allItems))
},[])

//  const filteredItems = items.filter((item)=> item.customer_id.toLowerCase().includes(search.toLowerCase()
//  ))

    return (
     <main>
      <Search search={search} setSearch={setSearch}/>
      <PickupList allItems = {items}/>
     </main>
    )
}

export default Home