import Header from './components/header/Header'
import ItemListContainer from './components/itemlist/ItemListContainer'
import React, { useState } from 'react'
import { Fragment } from 'react'
import ItemCont from './components/itemcont/itemcont'
import Nav from './components/nav/nav'
import './components/app.css'

const App = ( ) => {
    const [contador,setContador]= useState(0)
    const [cart,setCart]= useState(0)
    const handleSum= () =>{
        setContador(contador + 1)
    }
    const handleSubs =() =>{
        if (contador ===0) {
            return;
        }
        
        setContador(contador - 1)
    }    

    const handleAdd=() =>{
        setCart(cart + contador)
        setContador(0)
    }
    
    return(
    <Fragment>
    <body>
    <Header titulo="Drip's Land"/>
    <Nav onAdd={handleAdd}cart={cart}/>
    <ItemListContainer/>
    
    <ItemCont Contador={contador} onSum={handleSum} onSubstract={handleSubs} onAdd={handleAdd}/>
    </body>
    </Fragment>
    )
}

export default App  