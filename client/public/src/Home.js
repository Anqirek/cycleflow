import {useEffect,useState} from 'react'
import PickupList from './PickupList'
import Search from './Search'
import EditPickups from './EditPickups'
 

function Home() {
 const [items,setItems]=useState([])
 const [search, setSearch]=useState("") 
 const itemURL = '/items'

useEffect(()=>{
 fetch(itemURL)
 .then(res => res.json())
 .then((allItems) => setItems(allItems))
 
},[])

const oneCustomer=items.map((item)=>item.customer)
// const filterCustomer = items.map((oneName)=>oneName)
const filteredItems = items.filter((item)=> item.bottle.toLowerCase().includes(search.toLowerCase()
 ))

console.log(oneCustomer)

    return (
     <main>
      <Search search={search} setSearch={setSearch}/>
      <PickupList allItems={filteredItems} />
     </main>
    )
}

export default Home