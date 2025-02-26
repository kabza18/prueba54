//react
import * as React from 'react';

//MUI components
import {Alert, AlertTitle,Stack} from "@mui/material/";

const MessageSuccess = ({ purchaseID }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2} >
            <Alert severity="success">
                <AlertTitle>Felicitaciones!!! tu compra se realizó con éxito!!!</AlertTitle>
                Este es tu código de compra: <strong>{purchaseID}</strong>
                <div>En los próximos minutos recibirás un mail con los códigos para descagarte los juegos o para retirarlos en nuestras tiendas!!!</div>
            </Alert>
        </Stack>
    );
};

export default MessageSuccess;