//react
import * as React from 'react';

//MUI components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


//styles
import "./GameDescription.css"


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const BasicCard=({desc}) => {
    return (
        <Card sx={{ minWidth: 275,minHeight:470, marginLeft: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    CheckPoint Games
                </Typography>
                <Typography variant="h5" component="div">
                    {desc.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Desarrollado por: {desc.develop}
                </Typography>
                <Typography variant="body2">
                    {desc.ldesc}
                </Typography>
                <Typography variant="body3">
                    <br />
                    Categoría: {desc.genre}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default BasicCard