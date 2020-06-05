import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';


export default function Attention() {
return(
	<div className="container-fluid shadow1" >
        <div className="row"> 
            <div className="col-sm-6 col-9 bg2">
                <div className="row justify-content-center align-items-center p-5"> 
                    <div className="p-5">
                    <h1>
                        WHAT YOU NEED TO KNOW ABOUT COVID-19 NYC: STAY AT HOME
                    </h1>
                    <Button className=" mt-3" size="large" variant="outlined" style={{ borderColor:'#fff',color:"#fff",marginLeft:"0 auto" }}>
                        Learn More
                    </Button>
                    </div>
                </div>
                    
            </div>
            <Parallax
                
                bgImage={'/static/img.jpg'}
                bgImageAlt="the dog"
                strength={200}
            >
            
            <div className="col bg"/>
            
            </Parallax>
        
         
         
         
        <style jsx>{`
        	.bg{
        		height:60vh;
                width:50vw;
        	}
            @media only screen and (max-width: 600px) {
                .bg{
                    height:90vh;
                    width:25vw;
                }
                .bg2{
                    height:90vh !important;
                    background-color:black;
                }
            }
            .bg2{
                height:60vh;
                background-color:black;
            }
            .row{
                height:100%;
                 
            }
            .button{
                background-color:#fff;
            }
            
            .bg-text{
                background: rgba(0, 0, 0, 0.8);
                height relative;

            }
        	
	    `}</style>
        </div>
    </div>
)};