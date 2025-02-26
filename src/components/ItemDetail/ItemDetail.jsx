//react
import React from 'react'

//MUI components
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

//styles
import "./ItemDetails.css"

const ItemDetail = () => {
    return (
        <div className='cantidad_styles'>
            <span>Cantidad: </span>
            <AddIcon fontSize='15px' />
            <div className='cantidad'>
            <b className='num'>{"1"}</b>
            </div>
            <RemoveIcon fontSize='15px'/>
        </div>
    )
}

export default ItemDetail
