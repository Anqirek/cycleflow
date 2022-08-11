import React, {useState,useEffect} from "react";


const startValue = {
  customer:'',
  bottle: '',
  size: '',
  count: '',
}

function NewItem({setItems}) {

 const [customer,setCustomer]=useState([])
 const [newItem, setNewItem] = useState({
        customer:'',
        bottle: '',
        size: '',
        count: '', 
    })


 useEffect(()=> {
      fetch('/customers/')
      .then(res => res.json())
      .then((allCustomers) => setCustomer(allCustomers))
      },[])
     

 function handleChange(e){
        setNewItem((currentNewItem) => {
         return {
            ...currentNewItem,
            [e.target.name]: e.target.value,
        };
      })
    }

 function handleSubmit(e) {
    e.preventDefault()
    fetch('/items/', {
    method:"POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })

  .then(res => res.json())
  .then(handleItems)
  }

  function handleItems(data) {
  setNewItem(startValue)
  setItems((currentItems) => [...currentItems,data])
  }

  function handleCustomer(){
    
  }

 return (
    <div className="new-item-form">
     <h2>New Item</h2>
     <form onSubmit = {handleSubmit}>
        <input
          type="text" 
          name="name" 
          value={newItem.customer} 
          placeholder="Customer name"
          onChange = {handleChange}
         />
      

        <input
            type="text" 
            name="bottle" 
            value={newItem.bottle} 
            placeholder="Bottle type"
            onChange = {handleChange}
        />

        <input
            type="text" 
            name="size" 
            value = {newItem.size} 
            placeholder="Size"
            onChange = {handleChange}
         />

        <input 
            type="number"
            name="count"   
            step="0" 
            value = {newItem.count} 
            placeholder="Count" 
            onChange = {handleChange}
         />
            
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default NewItem;
