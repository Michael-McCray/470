import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';


export default function Home() {
return(
	<div className="shadow1 p-0"> 
    <Parallax
            
            bgImage={'/static/img.jpg'}
            bgImageAlt="the dog"
            strength={200}
        >
             <div className=" bg container-fluid">
                <div className="row align-items-center justify-items-right">
                    <div className="col-12 offset-sm-6 col-sm-6 bg-text p-5 ">
                        <h1>HFDC 470 WEST 146 STREET</h1>
                        <h3>Tenants Association</h3>
                        <ul>
                            <li>Stay up to date </li>
                            <li>Stay informed</li>
                            <li>Be hear</li>
                        </ul>
                        
                        <Button className="ml-5 mt-3 button" size="large" variant="outlined" style={{ borderColor:'#fff',color:"#fff" }}>
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
        </Parallax>
         
         
         
        <style jsx>{`
        	.bg{
        		height:80vh;
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
)};