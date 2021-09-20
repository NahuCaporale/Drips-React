import Header from '../header/Header'
import Cart from '../cartwidgt/CartWidget'
import './nav.css'
import { Fragment } from 'react/cjs/react.production.min'
const Nav = ({cart,onAdd}) =>{
   return( 
   <Fragment>
   <nav className='main-nav'>
                    <ul className='main-nav-list'>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Productos</a>
                        </li>
                        <li>
                            <a href="#">Nosotros</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                        
                        <Cart cart={cart} onAdd={onAdd}/>
                    </ul>
                </nav>
</Fragment>)
}

export default Nav