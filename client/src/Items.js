import React, {useState,useEffect} from 'react'
import PickupList from './PickupList'
import Search from './Search'
import UpdateItems from './UpdateItems'
import NewItem from './NewItem'

function Items(){

 const [items,setItems]=useState([])
 const [search, setSearch]=useState('')


 useEffect(()=>{
        fetch('http://localhost:4000/items')
        .then(res => res.json())
        .then((allTheItems)=>setItems(allTheItems))
 },[])

    const filteredItems = items.filter((item)=>item.bottle.toLowerCase().includes(search.toLowerCase()
    ))
    
    return (
    
        <main>
            <NewItem setItems={setItems} />
            <UpdateItems setItems={setItems} />
            <Search search={search} setSearch={setSearch} />
            <PickupList itemList={filteredItems} />
        </main>
    )
}


export default Items