import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import { Box } from "@mui/system";
import Rect from "./layout/Rect";
import Portfolio from "./portfolio/Portfolio";
import { Masonry } from "@mui/lab";
import Divider from "./layout/Divider";
import Contact from "./layout/Contact";
import { createTheme, Skeleton, ThemeProvider } from "@mui/material";

function App() {

    const theme=createTheme({
        typography:{
            h2:{
                fontSize:'3rem'
            },
            h6:{
                fontSize:'1.4rem'
            },
            p:{
                fontSize:'1rem'
            },
        }
    })

    const [about,setAbout]=useState();
    const [phone,setPhone]=useState(window.innerWidth<=600);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND}api/about?populate=*`).then(response => {
            setAbout(response.data.data.attributes);
        });    
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width:'calc(100% - 2rem)',
                    maxWidth:'1000px',
                    margin:'0 auto',
                    p:'1rem',
                    backgroundColor:'#fafafa',
                    boxShadow:'0px 0px 50px 0px #d7d7d7'
                }}
            >
                {/* Home */}
                {phone?
                    <Masonry columns={1} spacing={2} sx={{m:0}}>
                        <Rect size={'auto'} text={'Creative Portfolio of Finn Bullock'}/>
                    </Masonry>
                :
                    <Masonry columns={2} spacing={2} sx={{m:0}}>
                        <Rect size={'short'} text={'Creative'}/>
                        <Rect size={'short'} text={'Portfolio'}/>
                        <Rect size={'short'} text={'of'}/>
                        <Rect size={'short'} text={'Finn Bullock'}/>
                    </Masonry>
                }

                <Divider/>

                {/* About */}
                <Masonry columns={phone? 1 : 2} spacing={2} sx={{m:0}}>
                {about?
                <>
                    <Rect size={'short'} text={'About Me'}/>
                    <Rect size={ phone? 'auto' : 'square'} text={about.about} smallText/>
                    <Rect size={'square'} img={about.image.data.attributes.url}/>
                    <Contact contact={about}/>
                </>
                :
                <>
                    <Box sx={{aspectRatio:'3/1'}}>
                        <Skeleton variant='rectangular' sx={{height:'100%'}}/>
                    </Box>
                    <Box sx={{aspectRatio:'1'}}>
                        <Skeleton variant='rectangular' sx={{height:'100%'}}/>
                    </Box>
                    <Box sx={{aspectRatio:'1'}}>
                        <Skeleton variant='rectangular' sx={{height:'100%'}}/>
                    </Box>
                    <Box sx={{aspectRatio:'3/1'}}>
                        <Skeleton variant='rectangular' sx={{height:'100%'}}/>
                    </Box>
                </>
                }
                </Masonry>

                <Divider/>

                {/* Portfolio */}
                <Portfolio phone={phone}/>

            </Box>
        </ThemeProvider>
    );
}

export default App;
