import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';


export default function Footer() {
return(
	<div className="container-fluid" >
        <div className="row justify-content-center p-5"> 
            <h3>©2020 by HFDC 470 West 146 Street.</h3>
        </div>
        <style jsx>{`
            .container-fluid{
                background-color:black;
                color:#fff;
            }
        `}</style>
    </div>
)};