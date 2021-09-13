import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { Fragment } from 'react'
import './components/app.css'

const App = ( ) => {
    return(
    <Fragment>
    <body>
    <Header titulo="Drip's Land"/>
    
    <ItemListContainer saludo="Hi, im itemlistcontainer!"/>
    </body>
    </Fragment>
    )
}

export default App  