//react
import * as React from 'react';
import { Link } from 'react-router-dom'

//MUI components
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

//context
import { useContext, useState } from "react";
import { ItemsContext } from "../ItemContext/ItemContext";

//styles
import './CardDetail.css'

const MultiActionAreaCard = ({ game }) => {
    const { cart, setCart } = useContext(ItemsContext)
    const [showQuantity, setShowQuantity] = useState(0)


    const addItem = (game) => {
        setCart((current_incart) => {
            const alreadyexist = current_incart.find((item) => item.id === game.id)
            if (alreadyexist) {
                return current_incart.map((item) => {
                    if (item.id === game.id) {
                        return { ...item, quantity: item.quantity + showQuantity }
                    } else {
                        return item
                    }
                })
            } else {
                return [...current_incart, { id: game.id, name: game.name, quantity: showQuantity, price: game.price, img: game.img }]
            }
        })
        setShowQuantity(0)
    }


    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 470, maxHeight: 490 }}>
            <CardActionArea style={{ height: 'auto' }}>
                <Link to={`/item/${game.id}`}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={game.img}
                        alt={game.name}
                    />
                    <div className='card_content'>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {game.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {game.sdesc}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <br />
                                Categoría: {game.genre}
                            </Typography>
                        </CardContent>
                    </div>
                </Link>
            </CardActionArea>
            <CardActions className='card_actions'>
                <h5><b>ARS$ {game.price}</b></h5>
                <div className='quantity_style'>
                    <span>Cantidad:</span>
                    <button className='button_style' onClick={() => showQuantity > 0 ? setShowQuantity(showQuantity - 1) : null} >
                        <RemoveCircleOutlineIcon sx={{ fontSize: "20px", paddingRight: "5px" }} />
                    </button>
                    {showQuantity}
                    <button className='button_style' onClick={() => setShowQuantity(showQuantity + 1)}>
                        <AddCircleOutlineIcon sx={{ fontSize: "20px", paddingLeft: "5px" }} />
                    </button>
                </div>
                {showQuantity > 0 ? 
                    <Button variant="contained" onClick={() => { addItem(game) }}>comprar</Button> :
                    <Button variant="contained" disabled>Comprar</Button>
            }
                
            </CardActions>
        </Card>
    );
}

export default MultiActionAreaCard 