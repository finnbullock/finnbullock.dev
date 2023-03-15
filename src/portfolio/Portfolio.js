import React, { useEffect, useState } from "react";
import axios from 'axios';
import PortfolioItem from "./PortfolioItem";
import { Masonry } from "@mui/lab";
import Company from "./Company";

function Portfolio({ phone }) {

    let [companies,setCompanies]=useState([]);
    let [items,setItems]=useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND}api/companies`).then(response => {
            setCompanies(response.data.data.reverse());
        });
        axios.get(`${process.env.REACT_APP_BACKEND}api/portfolio-items?populate=*`).then(response => {
            setItems(response.data.data.reverse());
        });    
    },[]);

    return (
        <>
            {companies && Object.values(companies).map((company)=>
                <Masonry columns={phone? 1 : 2} spacing={2} sx={{m:'0 0 -1rem 0'}}>
                    <Company company={company.attributes}/>
                    {items && Object.values(items).map((item)=>
                        <>
                        {item.attributes.company.data.attributes.name === company.attributes.name?
                            <PortfolioItem item={item.attributes}/>
                        :null} 
                        </>
                    )}
                </Masonry>
            )}
        </>
    );
}

export default Portfolio;