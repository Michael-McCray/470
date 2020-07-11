import React from 'react';
import { Parallax, Background } from 'react-parallax';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles , createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useMutation } from 'graphql-hooks'
import TextField from '@material-ui/core/TextField';


const Contact = `
    mutation contact($email: String!, $name: String!, $body: String!, $subject: String!){
        contact(email:$email,name:$name,body:$body,subject:$subject){    
            name
        }
    }
`

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color:'#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'center',
     '& .MuiTextield-root': {
      fontSize: 20,
    },
   
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));



export default function Home() {
const [contact, state] = useMutation(Contact)
const classes = useStyles();
const [open, setOpen] = React.useState(false);



const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};
return(
	<div  id='home'className="shadow1 p-0"> 
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
                        
                        <Button className="mt-2 button" size="large" variant="outlined" style={{ borderColor:'#fff',color:"#fff" }} onClick={handleOpen}>
                            Contact us
                        </Button>
                    </div>
                </div>
            </div>
            <ThemeProvider theme={darkTheme}>
             <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    
                    <form  className={classes.root} noValidate autoComplete="off" onSubmit={(event) => handleSubmit(event,contact,handleClose)}>
                        <h2 id="transition-modal-title">Contact Us</h2>
                        <TextField
                            name="name"
                            variant="outlined"
                            label="Name"
                            style={{ margin: 8 ,}}
                            placeholder="Fullname"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            name="email"
                            variant="outlined"
                            label="Email"
                            style={{ margin: 8 }}
                            placeholder="Email Address"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            name="subject"
                            variant="outlined"
                            label="Subject"
                            style={{ margin: 8 }}
                            placeholder="Subject"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            name="body"
                            variant="outlined"
                            label="Message"
                            style={{ margin: 8 }}
                            placeholder="Message"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button className="button m-3" fullWidth size="large" variant="outlined" type="submit" style={{ borderColor:"#fff"}}>
                           Send
                        </Button>
                    </form>
                  </div>
                </Fade>
              </Modal>
            </ThemeProvider>
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

async function handleSubmit(event,contact,handleClose) {
  event.preventDefault()
  const form = event.target
  const formData = new window.FormData(form)
  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const body = formData.get('body')
  form.reset()
  const result = await contact({
    variables: {
      name,
      email,
      subject,
      body,
    },
  })
  handleClose()
}



