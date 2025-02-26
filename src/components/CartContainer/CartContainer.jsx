//react
import {useContext} from 'react';
import { useTheme } from '@mui/material/styles';

//MUI components
import {Box, Card, CardContent, CardMedia, Typography } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';


//context
import { ItemsContext } from '../ItemContext/ItemContext';

//styles
import "./CartContainer.css"

const Checkout = ({ purchase }) => {
    const theme = useTheme();
    const { cart, setCart } = useContext(ItemsContext)

    const removeItem = (purchase) => {
        setCart((current_incart) => {
            if (current_incart.find((item) => item.id === purchase.id)?.quantity === 1) {
                return current_incart.filter((item) => item.id !== purchase.id)
            } else {
                return current_incart.map((item) => {
                    if (item.id === purchase.id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeAll = (purchase) => {
        setCart((current_incart) => {
            return current_incart.filter((item) => item.id !== purchase.id);
        });
    };

    return (
        <div className='cart_precheckout'>
            <Card sx={{ display: 'flex'}}>
                <CardMedia
                    component="img"
                    sx={{ width: 300 }}
                    image={purchase.img}
                    alt={purchase.name}
                />
                <div className='card_align'>

                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{ flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            {purchase.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <b>Precio por unidad:</b> ARS$ {purchase.price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <b>Cantidad:</b> {purchase.quantity}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            <b>Subtotal:</b> ARS$ {purchase.quantity * purchase.price}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                <div className='delete_icon'>
                    <button className='delete_button' onClick={()=>removeAll(purchase)}>
                        <DeleteIcon sx={{ color: "black" }} />
                        <div>Eliminar todos</div>
                    </button>
                    <button className='delete_button' onClick={()=>removeItem(purchase)}>
                        <DeleteIcon sx={{ color: "black" }} /> <div>Eliminar 1 item</div>
                    </button>
                </div>
                </div>
            </Card>
        </div>
    );
}

export default Checkout