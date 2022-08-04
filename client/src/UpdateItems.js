import React, {useState} from 'react'


function UpdateItems({item,setItem}){

 const [bottle, setBottle]=useState('')
 const [size, setSize]=useState('')
 const [count,setCount]=useState('0')
 
function handleEdit(e) {
    e.preventDefault()
    
    fetch(`/items/${item.id}`,{
      method: "PATCH",
      body: JSON.stringify({
       bottle: bottle,
       size: size,
       count: count,
      }),
      headers: {
       "Content-Type": "application/json",
       },
     })
      .then(res=>res.json())
      .then((updatedItem)=>console.log(updatedItem))
    }

 return (
    <>
    <div className="updateitems-form">
    <h2>Update Item</h2>
      <form onSubmit={handleEdit}> 
        <input
            type='text'
            value={bottle}
            placeholder='Bottle'
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

        <button onClick={handleEdit} type='submit'>Update Items</button>  
       </form>
      </div>
        
   </>
    )
}

export default UpdateItems;