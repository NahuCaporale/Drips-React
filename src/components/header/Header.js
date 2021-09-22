import { Fragment } from 'react/cjs/react.production.min'
import Cart from '../cartwidgt/CartWidget'
import './header.css'
import Nav from '../nav/nav'

const Header = ({titulo}) => {
    return(

            
        <body>
            <Fragment>
        <header className='main-header'>
            <div className='container'>
                <h1> {titulo} </h1>
            </div>
        </header>
        </Fragment>
        </body>
        
    )
}

export default Header