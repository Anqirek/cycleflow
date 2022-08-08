import PickupCard from './PickupCard'

function PickupList({allItems}){
 const renderItem = allItems.map((item)=>{
return <PickupCard 
    key = {item.id} 
    bottle = {item.bottle} 
    size = {item.size} 
    count = {item.count} />
    
    }) 

return (
        <ul>{renderItem}</ul>
        )
      
}

export default PickupList;