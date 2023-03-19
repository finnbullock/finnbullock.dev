import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";

function Rect({ size, text, smallText=false, img=null }) {

    if(img){
        img=img.substring(1);
        img=`${process.env.REACT_APP_BACKEND+img}`;
    }

    return (
        <Card
            square
            elevation={2}
            sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                aspectRatio: size==='short'? '3/1' : size==='square'? '1' : '',
            }}
        >
            { img?
                <CardMedia
                    sx={{height:'100%',width:'100%'}}
                    image={img}
                />
            :
                <Typography 
                    variant={ smallText? 'p' : 'h2' } 
                    component={ smallText? 'p' : 'h2' }
                    sx={{ m:'2rem', whiteSpace: 'pre-line', textAlign:'center' }}
                >
                    {text}
                </Typography>
            }
        </Card>
    );
}

export default Rect;