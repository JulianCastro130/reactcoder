import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {IconButton} from '@mui/material'

const CartWidget = () => {
    return(
    <IconButton
        sx={{ mr: 2 }}
        color="inherit"
        aria-label="Cart"
    >
        <ShoppingCartIcon />
    </IconButton>
    )
}

export default CartWidget