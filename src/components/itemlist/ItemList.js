import Item from './Item' 

const ItemList = ({productos})=>{
return(
    <>    
    {productos.map((producto,i)=>{
            return <Item producto={producto}/>
        })}
    </>
)
}
export default ItemList