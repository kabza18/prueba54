//react
import { useContext } from 'react'
import {Link} from "react-router-dom"

//context
import { ItemsContext } from '../ItemContext/ItemContext';

//MUI components
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//styles
import './CartWidget.css'

const CardWidget = () => {
    const { cart, setCart } = useContext(ItemsContext)

    const quantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)


    return (
            <Link to="/cart">
        <div className='cart_container'>
            <ShoppingCartOutlinedIcon />
            <p className='number'>{quantity}</p>
        </div>
            </Link>
    )
}

export default CardWidget