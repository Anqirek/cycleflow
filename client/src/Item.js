import UpdateItems from './UpdateItems'


function Item({item, setItem}){
 
 return (
    <main>
        <UpdateItems item={item} setItem={setItem} />
    </main>
    )
   }
   
   export default Item