import Header from '../header/Header'
import Cart from '../cartwidgt/CartWidget'
import './nav.css'
import { Fragment } from 'react/cjs/react.production.min'
import { Link } from 'react-router-dom'

const Nav = ({cart,onAdd}) =>{
   return( 
       <body>
    <Fragment>
        <nav className='main-nav'>
                    <ul className='main-nav-list'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/products'>Productos</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contacto</Link>
                        </li>
                        <li>
                            <Link to='/us'>Nosotros</Link>
                        </li>
                        
                            <Cart cart={cart} onAdd={onAdd}/>
                    </ul>
        </nav>
    </Fragment>
</body>)
}

export default Nav