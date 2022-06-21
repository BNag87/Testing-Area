//==========----------→ ↓IMPORTS HERE↓ ←---------==========
import React from 'react';

import { Drawer, Box, Typography } from '@mui/material';

//==========----------→ ↓STYLE IMPORTS HERE↓ ←---------==========
import { Button } from "../../styles"

//==========----------→ ↓GENERAL FUNCTIONS HERE↓ ←---------==========

//onclick function for sidebar toggling
const toggleDrawer = () => {
    console.log("Drawer was toggled!")
}

//==========----------→ ↓COMPONENT STARTS HERE↓ ←---------==========
export const Sidebar = () => {
return(

    <Drawer anchor="left">
        <Box p={2} width="250px" textAlign="center" role="presentation">
            <Typography variant="h6" component="div">Side Panel</Typography>
        </Box>
    </Drawer>
)
}