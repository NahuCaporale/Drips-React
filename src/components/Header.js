import { Fragment } from 'react/cjs/react.production.min'
import Cart from './CartWidget'
import './header.css'


const Header = ({titulo,parrafo,id}) => {
    return(

            <Fragment>
        <body>
        <header className='main-header'>
            <div className='container'>
                <h1> {titulo} </h1>
                <p>{parrafo}</p>
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
                        
                        <Cart style='color:#FFAEBC; text-decoration: none;' />

                    </ul>
                </nav>
            </div>
        </header>
        </body>
        </Fragment>
    )
}

export default Header