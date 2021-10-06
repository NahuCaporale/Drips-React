import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({cart}) => {
    return(
        <Fragment>
        <span className="material-icons"><Link className='cart' to='/cart'> shopping_cart</Link></span>
        <span className='numbercart'>{cart}</span>
        </Fragment>
        )
}
export default Cart