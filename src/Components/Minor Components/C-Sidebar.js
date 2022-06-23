//==========----------→ ↓IMPORTS HERE↓ ←---------==========
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
//==========----------→ ↓STYLE IMPORTS HERE↓ ←---------==========


//==========----------→ ↓GENERAL FUNCTIONS HERE↓ ←---------==========


//==========----------→ ↓COMPONENT STARTS HERE↓ ←---------==========
export const Sidebar = () => {
    //state var to control the opening of the sidebar'
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

//==========----------→ ↓COMPONENT PARTS HERE↓ ←---------==========
return(
    <>
        <IconButton r={2} size="large" edge="start" color="primary" aria-label="logo" onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon>
            
            </MenuIcon>
        </IconButton>
        <Drawer 
            anchor="left" 
            open={ isDrawerOpen }
            onClose={() => setIsDrawerOpen(false)}>               

                <Box sx={{
                    backgroundColor:"rgb(100,200,200)",
                    width: "250px", 
                    textAlign:"center",
                    }}
                    role="presentation">
                    <Typography variant="h5" component="div">DM Tools</Typography>
                    <hr/>
                    <Typography variant="h6"><Link to="/">Home</Link></Typography>
                    <hr/>
                    <Typography variant="h6"><Link to="MerchantList">Merchant Inventories</Link></Typography>
                    <Typography variant="h6"><Link to="NPCGenerator">NPC Generator</Link></Typography>
                    <p>More to come</p>
                </Box>
        </Drawer>
    </>
)
}