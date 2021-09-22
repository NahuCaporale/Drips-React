import { Fragment, useEffect } from "react";
import ItemList from "./ItemList";
import "./item.css";
import { useState } from "react/cjs/react.development";
import Item from "./Item";



const ItemListContainer = () =>{
    //items locales
    const prods= [{categoria:"Buzo",modelo:"Reverse Weave hoodie"},{categoria:"Zapatilla",modelo:"Air max 97"}]

    const [productos,setproductos] = useState([])

    useEffect(()=>{
        const asyncMock= new Promise ((res)=>{
            setTimeout(() => {
                res(prods)
            }, 2000);
        })
        asyncMock.then((wait)=>{
            setproductos(wait)
        })
    })

    if (productos.length > 0) {
        return(
            <>
            <ItemList productos={productos}/>
            </>
        )

    }else{
        return(
            <>
            <h1 className='spinner'>Cargando...</h1>
            </>
        )
    }

return (
<ItemList productos={productos}/>
    );
}
export default ItemListContainer;
