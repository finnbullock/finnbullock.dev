import React from "react";
import { Card, Typography } from "@mui/material";

function Company({ company }) {

    return (
        <Card
            square
            sx={{
                aspectRatio:'3/1',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}
        >
           <Typography variant='h6' component='h6' sx={{mb:'1rem'}}>
                {company.name}
           </Typography>
           <Typography variant='p' component='p'>
                {company.description}
           </Typography>
        </Card>
    );
}

export default Company;
