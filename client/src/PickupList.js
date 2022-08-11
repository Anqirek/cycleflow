import PickupCard from './PickupCard'

function PickupList({itemList}){
    const renderItem = itemList.map((item)=> {
        // console.log(plant)
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