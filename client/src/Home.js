import {useState} from 'react'
import PickupList from './PickupList'
import Search from './Search'
 

function Home({item}) {
 
 const [search, setSearch]=useState("") 


 const oneCustomer=item.map((oneItem)=>oneItem.customer)
 const filteredItems = item.filter((oneItem)=> oneItem.bottle.toLowerCase().includes(search.toLowerCase()
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