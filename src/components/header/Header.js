import { Fragment } from 'react/cjs/react.production.min'
import Cart from '../cartwidgt/CartWidget'
import './header.css'
import Nav from '../nav/nav'

const Header = ({titulo,parrafo,id}) => {
    return(

            <Fragment>
        <body>
        <header className='main-header'>
            <div className='container'>
                <h1> {titulo} </h1>
                <p>{parrafo}</p>
            
            </div>
        </header>
        </body>
        </Fragment>
    )
}

export default Header