import { Typography } from "@mui/material";
import React from "react";

const ItemListContainer = (greeting) => {
    return (
        <Typography variant="body1">
            {greeting.msg}
        </Typography>
    )
}

export default ItemListContainer