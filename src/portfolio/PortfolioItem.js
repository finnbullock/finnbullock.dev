import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";

function PortfolioItem({ item }) {

    //console.log(item)

    let img=item.thumbnail.data.attributes.url;
    img=img.substring(1);
    img=`${process.env.REACT_APP_BACKEND+img}`;

    return (
        <Card
            square
        >
            <CardActionArea
                sx={{
                    height:'100%',
                    p:'1rem'
                }}
                href={item.link}
                target='_blank'
            >
                <CardMedia
                    sx={{
                        //aspectRatio: '2/1',
                        height:'200px',
                        backgroundPosition:'top'
                    }}
                    image={img}
                />
                <CardContent
                    sx={{
                        p:'0.5rem 0'
                    }}
                >
                    <Typography variant='h6' component='h6' sx={{mb:'0.5rem'}}>
                        {item.name}
                    </Typography>
                    <Typography variant='p' component='p' sx={{mb:'1rem',fontStyle:'italic'}}>
                        {item.company.data.attributes.name}
                    </Typography>
                    <Typography variant='p' component='p' sx={{mb:'1rem'}}>
                        {item.description}
                    </Typography>
                    {item.skills.data && Object.values(item.skills.data).map((skill)=>
                        <Chip label={skill.attributes.name} sx={{m:'0 0.5rem 0.5rem 0'}}/>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default PortfolioItem;
