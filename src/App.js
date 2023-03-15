import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import { Box } from "@mui/system";
import Rect from "./layout/Rect";
import Portfolio from "./portfolio/Portfolio";
import { Masonry } from "@mui/lab";
import Divider from "./layout/Divider";
import Contact from "./layout/Contact";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

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

    let [about,setAbout]=useState();
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND}api/about?populate=*`).then(response => {
        setAbout(response.data.data.attributes);
      });    
    },[]);

    let phone=useMediaQuery('(max-width:600px)');

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width:'100%',
                    maxWidth:'1000px',
                    margin:'0 auto',
                    p:'1rem',
                    backgroundColor:'#fafafa',
                    boxShadow:'0px 0px 50px 0px #d7d7d7'
                }}
            >
                {/* Home */}
                <Masonry columns={phone? 1 : 2} spacing={2} sx={{m:0}}>
                    <Rect size={'short'} text={'Creative'}/>
                    <Rect size={'short'} text={'Portfolio'}/>
                    <Rect size={'short'} text={'of'}/>
                    <Rect size={'short'} text={'Finn Bullock'}/>
                </Masonry>

                <Divider/>

                {/* About */}
                {about &&
                <Masonry columns={phone? 1 : 2} spacing={2} sx={{m:0}}>
                    <Rect size={'short'} text={'About Me'}/>
                    <Rect size={'square'} text={about.about} smallText/>
                    <Rect size={'square'} img={about.image.data.attributes.url}/>
                    <Contact contact={about}/>
                </Masonry>
                }

                <Divider/>

                {/* Portfolio */}
                <Portfolio phone={phone}/>

            </Box>
        </ThemeProvider>
    );
}

export default App;
