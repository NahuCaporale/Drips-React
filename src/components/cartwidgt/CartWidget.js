import { Fragment } from 'react'
import './cart.css'

const Cart = ({cart}) => {
    return(
        <Fragment>
        <span className="material-icons"><a href="#" class='cart'> shopping_cart </a></span>
        <span className='numbercart'>{cart}</span>
        </Fragment>
        )
}
export default Cart