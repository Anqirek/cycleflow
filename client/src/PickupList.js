import PickupCard from './PickupCard'

function PickupList({allItems}){
 const everyItem = allItems;
 console.log(everyItem)
    return (
        <ul className='cards'> 
         {everyItem.map((item,index) => 
          <div key={index}> <PickupCard
            
                customer={item.customer}
                bottle = {item.bottle}
                size = {item.size}
                count = {item.count}
                location = {item.location} 
                />
          </div>
         )}
        </ul>
    )
}

export default PickupList;