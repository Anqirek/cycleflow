import React, {useState, useEffect} from 'react'

function EditPickups({item}){
 
 const [bottle, setBottle]=useState('')
 const [size, setSize]=useState('')
 const [count,setCount]=useState('0')
 const [id, setId]=useState(null)
 

 function handleEdit(e) {
  e.preventDefault()
  fetch(`/items/${item.id}`,{
   method: "PATCH",
   body: JSON.stringify({
    item: id,
    bottle: bottle,
    size: size,
    count: count,
   }),
   headers: {
    "Content-Type": "application/json",
    },
  })
   .then(res=>res.json())
   .then((updatedItem)=>item(updatedItem))
 }

 return (
  <>
   <header>
    <h4 className="editform-header">
    Edit Changes
    </h4>
   </header>
   <div className="editform-text">
     <form className="editform" onSubmit={handleEdit}> 
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
      </form>
     </div>
     <button className= 'edit-btn btn-lg btn-success border-light btn-block' onClick={handleEdit}>Update Items</button>     
  </>
 )
}

export default EditPickups