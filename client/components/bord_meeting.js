import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';


function Meeting() {
    return (
        <div className="card container col-12 col-sm-3 card-1 m-5" style={{backgroundImage: "url('/static/img.jpg')"}}>
          <div className="row justijy justify-content-center align-items-end">
            <div className="text-center col-12 bg">
                <h3>
                   Meeting: Home repairs
                </h3>
                <h4>Time: TBD | Location: TBD</h4>
                <h5 className="more">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </h5>
                <Button className=" m-3 button" size="large" variant="containd" style={{ backgroundColor:'#fff',color:"black" ,transition: '1s '}}>
                    RSVP
                </Button>
            </div>
          </div> 
          <style jsx>{`
            div:hover .bg{
                background: rgba(0, 0, 0, 0.8);
                height:70%;
             }   
            .bg{
                background: rgba(0, 0, 0, 0.8);
                height:40%;
                transition: all .4s cubic-bezier(.25,.8,.25,1);
                
            }

            div:hover .more{
                display:block;
                 transition: all .8s cubic-bezier(.25,.8,.25,1);
            }
            .more{
                display:none;
            }
            .card {
                
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 4px;
                height: 500px;
                color:#fff;
              
            }

            card-1 {
              box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
              transition: all 0.4s cubic-bezier(.25,.8,.25,1);
            }

            .card-1:hover {
              box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
            .row{
                height:100%;
            }
        `}</style>
        </div>
    );
}



export default function Meetings() {
return(
	<div className="container-fluid pt-5" >
        <div className="row justify-content-center"> 
            <h1>Board Meeting</h1>
        </div>
        <div className="row justify-content-center pl-5 pr-5 pb-5">
            <Meeting/>
            <Meeting/>
        </div>
        <style jsx>{`
            .container-fluid{
                background-color:#fff;
                color:black;
            }
        `}</style>
    </div>
)};