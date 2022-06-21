//==========----------→ ↓IMPORTS HERE↓ ←---------==========
import { React, useState } from 'react';
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
//==========----------→ ↓STYLE IMPORTS HERE↓ ←---------==========
import { Button } from "../../styles"

//==========----------→ ↓GENERAL FUNCTIONS HERE↓ ←---------==========

//onclick function for sidebar toggling
const toggleDrawer = () => {
    console.log("Drawer was toggled!")
}

//==========----------→ ↓COMPONENT STARTS HERE↓ ←---------==========
export const Sidebar = () => {
    //state var to control the opening of the sidebar'
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

//==========----------→ ↓COMPONENT PARTS HERE↓ ←---------==========
return(
<>
    <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon>

        </MenuIcon>
    </IconButton>
    <Drawer 
        anchor="left" 
        open={ isDrawerOpen }
        onClose={() => setIsDrawerOpen(false)}
    >
                
            <Box p={2} width="250px" textAlign="center" role="presentation">
                <Typography variant="h6" component="div">Side Panel</Typography>
            </Box>
    </Drawer>
</>
)
}