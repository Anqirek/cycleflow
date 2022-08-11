import React, {useState,useEffect} from 'react'
import NewItem from './NewItem'
import PickupList from './PickupList'
import UpdateItems from './UpdateItems'
import Search from './Search'


function Items(){

 const [items,setItems]=useState([])
 const [search, setSearch]=useState('')


 useEffect(()=> {
    fetch('/items/')
    .then(res => res.json())
    .then((allItems) => setItems(allItems))
    },[])

    const filteredItems = items.filter((item)=>item)
    console.log(filteredItems)

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