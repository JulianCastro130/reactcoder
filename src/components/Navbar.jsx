import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import GrassIcon from '@mui/icons-material/Grass';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from "./CartWidget";


const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton
                        sx={{ mr: 2 }}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{ flexGrow: 1 }}
                        variant="h6" color='white'
                    >
                        Power Plant
                    </Typography>
                    <IconButton
                        sx={{ mr: 2 }}
                        color="inherit"
                        aria-label="Cart"
                    >
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        sx={{ mr: 2 }}
                        color="inherit"
                        aria-label="Cart"
                    >
                        <GrassIcon />
                    </IconButton>
                    <CartWidget/>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default Navbar