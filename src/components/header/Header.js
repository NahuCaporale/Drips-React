import { Fragment } from 'react/cjs/react.production.min'
import Cart from '../cartwidgt/CartWidget'
import './header.css'
import Nav from '../nav/nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return(

            
        <body>
            <Fragment>
        <header className='main-header'>
            <div className='container'>
                <h1><Link className='titleStyle' to='/'> Drip's Land </Link></h1>
            </div>
        </header>
        </Fragment>
        </body>
        
    )
}

export default Header