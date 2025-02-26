//react
import { useContext } from 'react'
import {Link} from "react-router-dom"

//MUI components
import {Button,Stack} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

//context
import { ItemsContext } from '../../components/ItemContext/ItemContext'

//components
import CartCards from "../../components/CartContainer/CartContainer"

//styles
import "./CartPage.css"


const CheckoutPage = () => {
    const { cart, setCart } = useContext(ItemsContext)
    
    const removeAll = () => {
        setCart([])
    };

    return (
        <div>
            {cart.map((tobuy) => (
                <div key={tobuy.id}>
                    <CartCards purchase={tobuy} />
                </div>
            ))}
            <div className='cart_buttons'>
            <Stack direction="row" spacing={2}>
                {cart.length >0 ? <Button  onClick={()=>removeAll()} variant="contained" startIcon={<DeleteIcon />}>
                    Vaciar Carrito
                </Button> : <h3>No hay objetos en el carrito</h3>}
                {cart.length >0 ? <Link to="/checkout"><Button variant="contained" sx={{padding:"13px"}} endIcon={<SendIcon/>}>
                    Checkout
                </Button></Link> : null }
            </Stack>
            
            </div>
        </div>
    )
}

export default CheckoutPage