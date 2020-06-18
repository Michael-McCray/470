import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Attention() {
    const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

return(
	<div className="container-fluid shadow1" >
        <div className="row"> 
            <div className="col-sm-6 col-9 bg2">
                <div className="row justify-content-center align-items-center p-5"> 
                    <div className="p-5">
                    <h1>
                        WHAT YOU NEED TO KNOW ABOUT COVID-19 NYC: STAY AT HOME
                    </h1>
                    <Button className=" mt-3" size="large" variant="outlined" style={{ borderColor:'#fff',color:"#fff",marginLeft:"0 auto" }} onClick={handleClickOpen('paper')}>
                        Learn More
                    </Button>
                    </div>
                </div>
                    
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                fullWidth
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">WHAT YOU NEED TO KNOW ABOUT COVID-19 NYC: STAY AT HOME</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                  <DialogContentText
                    className="pl-4 pr-4 pt-0"
                    
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    ​<ul className="pt-0">
                        <li>Only go outside for essential tasks. Those tasks include working for an essential business, getting groceries and supplies, 
                        or securing necessary medical care. If you must go outside, keep at least six feet of distance between yourself and others, 
                        and wear a face covering.</li>
                        <li>Wash your hands with soap and water often, for at least 20 seconds every time, or use an alcohol-based hand sanitizer.</li>
                    </ul>
                
                    <a href="https://www1.nyc.gov/site/doh/covid/covid-19-main.page"><p>NYC Health Department: coronavirus disease 2019 (COVID-19)</p></a>

                    <a href="https://portal.311.nyc.gov/article/?kanumber=KA-03299"><p>Report a social distancing violation</p></a>

                    <p>
                    What to do if you are sick<br/>
                    COVID-19 is a disease that can affect your lungs and airways.<br/>
                    Symptoms include:
                    </p>
                    <ul>
                         <li>Fever (temperature of 100.4 degrees F or 38.0 degrees C or greater)  </li>
                         <li>Cough </li>
                         <li>Shortness of breath (trouble breathing) </li>
                         <li>Sore throat </li>
                         <li>Some patients also report: </li>
                         <li>Loss of a sense of taste or smell </li>
                         <li>Feeling achy  </li>
                         <li>Headache </li>
                         <li>Diarrhea </li>
                    </ul>
                    <p>
                    If you have any of these symptoms, and they are not due to a preexisting health condition, such as asthma or emphysema, you may have COVID-19 and you must stay home.<br/><br/>
                    If you have mild to moderate <a href="https://www1.nyc.gov/site/doh/covid/covid-19-symptoms-chronic-health-risks.page">symptoms associated with COVID-19</a>, isolate yourself at home immediately. After three to four days, if you still feel sick, contact your health care provider. If you have severe symptoms, such as difficulty breathing, call 911.<br/><br/>
                    COVID-19 NYC Data<br/>
                    You can find daily updates of information about people who have tested positive for COVID-19 in NYC and key public health milestones.</p>
                    <ul>
                         <li><a href="https://www1.nyc.gov/site/doh/covid/covid-19-data.page">COVID-19: Data</a> </li>
                         <li><a href="https://www1.nyc.gov/site/doh/covid/covid-19-goals.page">COVID-19: Public Health Milestones</a></li>
                    </ul>
                    
                    <p>

                    Report a Missing New Yorker<br/>
                    <a href="https://forms.cityofnewyork.us/f/covidmissing">File a report</a> about a friend or loved one who may be missing due to COVID-19.<br/>
                    Reports will only be accepted for individuals who are missing, and not known to be in specific hospitals. The report will then be sent to NYPD for further investigation.<br/><br/>
                    Get information and help the City learn more about the spread of COVID-19<br/>
                    If you are experiencing COVID-19 symptoms, have tested positive for COVID-19, or are in self-isolation, sign up for the NYC COVID-19 Engagement Portal to provide valuable, confidential information to the City and allow the City to share important information with you directly.<br/>
                    <a href="https://cv19engagementportal.cityofnewyork.us/#/display/5e63c34ff75d7a02111fcb6c">Visit the NYC COVID-19 Engagement Portal website</a> </p>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
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
