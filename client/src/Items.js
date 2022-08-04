import React, {useState,useEffect} from 'react'
import PickupList from './PickupList'
import Search from './Search'
import Item from './Item'
import NewItem from './NewItem'

function Items(){

 const [items,setItems]=useState([])
 const [search, setSearch]=useState('')

 const itemURL = '/items/'

 useEffect(()=>{
        fetch(itemURL)
        .then(res => res.json())
        .then((allItems) => setItems(allItems))
        
 },[])

    const filteredItems = items.filter((item)=> item
    )
    console.log(filteredItems)

       return (
        <main>
         <Item setItems={setItems} />
         <NewItem items={items} setItems={setItems}/>
         <Search search={search} setSearch={setSearch}/>
         <PickupList allItems={filteredItems} />
        </main>
       )

}

export default Items