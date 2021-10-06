import Header from './components/header/Header'
import ItemListContainer from './components/itemlist/ItemListContainer'
import React, { useState, Fragment } from 'react'
import ItemCont from './components/itemcont/itemcont'
import Nav from './components/nav/nav'
import { BrowserRouter, Route } from 'react-router-dom'
import './components/app.css'
import ItemDetailContainer from './components/itemlist/Itemdetailcontainer'

const App = () => {
    //logica de contador
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

    <BrowserRouter>
        <body>
            <Fragment>

                <Route path='/' component={Header} />                
                <Nav onAdd={handleAdd}cart={cart}/>
                <ItemListContainer/>
                <ItemDetailContainer/>
    
                <ItemCont Contador={contador} onSum={handleSum} onSubstract={handleSubs} onAdd={handleAdd}/>
    
            </Fragment>
        </body>
    </BrowserRouter>
    
    )
}

export default App  