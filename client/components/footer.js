import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';


export default function Footer() {
return(
	<div className="container-fluid" >
        <div className="row justify-content-center p-5"> 
            <h4>©2020 by HFDC 470 West 146 Street.</h4>
        </div>
        <style jsx>{`
            .container-fluid{
                background-color:#000;
                color:#06020;
            }
        `}</style>
    </div>
)};