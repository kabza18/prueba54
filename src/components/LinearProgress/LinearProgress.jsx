import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

//Styles
import "./LinearProgress.css"

    const LinearIndeterminate= ()=> {
    return (
        <div className='linear_class'>
        <Box sx={{ width: '90%',justifyContent: "center" }}>
            <LinearProgress color="success" />
        </Box>
        </div>
    );
}

export default LinearIndeterminate