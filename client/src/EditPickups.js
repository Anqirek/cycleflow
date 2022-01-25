import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function EditPickups({item}){
 
 const [bottle, setBottle]=useState('')
 const [size, setSize]=useState('')
 const [count,setCount]=useState('0')
 const reroute=useHistory()

  function handleRoute(){
    reroute.push('/EditPickups')
  }

 function handleEdit(e) {
  e.preventDefault()
  fetch(`/items/${item.id}`,{
   method: "PATCH",
   headers: {
    "Content-Type": "application/json",
    },
     body: JSON.stringify({
      item: item.id,
      bottle: bottle,
      size: size,
      count: count,
     }),
  })
   .then(res=>res.json())
   .then((updatedItem)=>item(updatedItem))
 }

 return (
   <div>
     <form onSubmit={handleEdit}> 
       <input
        type='text'
        value={bottle}
        placeholder= 'Bottle'
        required
        onChange={(e)=>setBottle(e.target.value)}
       />
       <br></br>
       <input
        type='text'
        value={size}
        placeholder= 'Size'
        required
        onChange={(e)=>setSize(e.target.value)}
       />
       <input
        type='text'
        value={count}
        placeholder= 'Count'
        required
        onChange={(e)=>setCount(e.target.value)}
       />
       <button className= 'btn btn-lg btn-success border-light btn-block' onClick={handleRoute}>Update Items</button>     
      </form>
     </div>
 )
}

export default EditPickups