//==========----------→ ↓IMPORTS HERE↓ ←---------==========
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { InvisiDiv } from "../../styles"
//==========----------→ ↓STYLE IMPORTS HERE↓ ←---------==========


//==========----------→ ↓GENERAL FUNCTIONS HERE↓ ←---------==========


//==========----------→ ↓COMPONENT STARTS HERE↓ ←---------==========
export const Sidebar = () => {
    //state var to control the opening of the sidebar'
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

// ==========-------------------- HEADER STYLES

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
                    height: "100%", 
                    textAlign:"center",
                    }}
                    role="presentation">
                    <Typography variant="h5" component="div" sx={{margin: 5}}>DM Tools</Typography>
                    <hr/>
                    <Typography variant="h6">
                            <InvisiDiv><Link to="/">Home</Link></InvisiDiv>
                    </Typography>
                    <hr/>

{/* disabled components 

<Link to="MerchantList">Merchant Inventories</Link>
<Link to="NPCGenerator">NPC Generator</Link>
*/}

                    <Typography variant="h6">Merchant List</Typography>
                    <Typography variant="h6">NPC Generator</Typography>
                    <Typography variant="h6"><Link to="WildSurges">Random Magic Effects</Link></Typography>
                    <hr/>
                    <p>More to come</p>
                    <p>Made by Basil Nagle</p>
                </Box>
        </Drawer>
    </>
)
}