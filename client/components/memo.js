import React from 'react';
import { Parallax, Background } from 'react-parallax';


export default function Memo() {
return(
	<div className=" p-0"> 
    <Parallax
            
            bgImage={'/static/img.jpg'}
            bgImageAlt="the dog"
            strength={200}
        >
             <div className=" bg container-fluid">
                <div className="row  bk align-items-center justify-content-center">
                <div className="row bg-text align-items-center justify-content-center">
                    <div className="p-3">
                        <h1>The Board</h1>
                        <p>​ 
                            To all shareholders: <br/>
                            Due to the pandemic there will be no shareholders meetings <br/>
                            until it is safe for us to meet.<br/><br/>
                            Updates:<br/>
                            All major repairs including the outside of the building are on hold <br/>
                            until the Governor allows construction workers to return to work. <br/>
                            Only emergency repairs will be done.<br/><br/>
                            For your convenience the courtyard will be open from<br/>
                            9am until 9pm, please keep the court yard<br/>
                            clean and maintain social distance and wear a mask.<br/>
                            Stay safe <br/>
                            Thank you <br/>
                            The Board
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </Parallax>
         
         
         
        <style jsx>{`
        	.bg{
        		height:50vh;
        	}
            .bk{
                height:100%;
                 
            }
            .button{
                background-color:#fff;
            }
            
            .bg-text{
                background: black;
                min-height 40vh;
                width:100vw;

            }
        	
	    `}</style>
    </div>
)};