//react
import * as React from 'react';
import { Link } from 'react-router-dom'

//MUI components
import { CardActionArea, CardActions, Card, CardContent, CardMedia,Typography  } from '@mui/material';

//styles
import './Cards.css'

const MultiActionAreaCard = ({ game }) => {

    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 470, maxHeight: 490 }}>
            <Link to={`/item/${game.id}`}>
                <CardActionArea style={{ height: 'auto' }}>
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
                </CardActionArea>
                <CardActions className='card_actions'>
                    <h6><b>ARS$ {game.price}</b></h6>
                    <p>Click para ver detalles</p>
                </CardActions>
            </Link>
        </Card>
    );
}

export default MultiActionAreaCard 