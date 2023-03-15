import { Box } from "@mui/material";
import React from "react";

function Divider() {

    return (
        <Box
            sx={{
                m:'0 0.5rem 1rem 0.5rem',
                height:'5px',
                backgroundColor:'#f9d849',
            }}
        />
    );
}

export default Divider;