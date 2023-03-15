import React from "react";
import { Card, IconButton, Link } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact({ contact }) {

    return (
        <Card
            square
            elevation={2}
            sx={{
                m:'1rem 0',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                aspectRatio:'3/1'
            }}
        >
            <Link href={`mailto:${contact.email}`} sx={{m:'0 0.5rem'}}>
                <IconButton sx={{color:'black'}}>
                    <MailOutlineIcon fontSize='large'/>
                </IconButton>
            </Link>
            <Link href={`tel:${contact.phone}`} sx={{m:'0 0.5rem'}}>
                <IconButton sx={{color:'black'}}>
                    <PhoneOutlinedIcon fontSize='large'/>
                </IconButton>
            </Link>
            <Link href={contact.instagram} target='_blank' sx={{m:'0 0.5rem'}}>
                <IconButton sx={{color:'black'}}>
                    <InstagramIcon fontSize='large'/>
                </IconButton>
            </Link>
        </Card>
    );
}

export default Contact;