import React from 'react';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Contact_Me from './contact';





function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={{ position: 'fixed', bottom: 20, right: 20}}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


export default function Nav(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({   
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };


  return (
    <React.Fragment>
  
      <CssBaseline />
      <AppBar style={{ background: "black" , color:'#fff' }} >
         <Toolbar>
    <IconButton edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
      <MenuIcon />
    </IconButton>
    <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            
             style={{width:"40vw"}}
      >
            <Divider />
      <List>
          <ListItem button>
            <ListItemText> <AnchorLink offset='180' href='#featured'>Featured</AnchorLink> </ListItemText>
            </ListItem>
          <ListItem button>
            <ListItemText> <AnchorLink offset='180' href='#meetings'>Meetings and events</AnchorLink> </ListItemText>
            </ListItem>
          <ListItem button>
            <ListItemText> <AnchorLink offset='180' href='#memo'>A Message From The Board</AnchorLink> </ListItemText>
          </ListItem>

            <Button className="m-4 button" size="large" variant="outlined" style={{ borderColor:'#fff',color:"#fff" }} onClick={handleOpen}>
                Contact us
            </Button>
      </List>
    </SwipeableDrawer>
    <AnchorLink offset='180' href='#home'>
    <h4  className="ml-2" style={{ letterSpacing: ".1px",fontFamily: "'Anton', sans-serif !important"}}>
      HFDC 470 WEST 146 STREET
    </h4></AnchorLink>
  </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
          {props.children}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Contact_Me handleClose={handleClose} handleOpen={handleOpen} open={open}/>      

      <style jsx>{`
                
                  .button{
                      background-color:#fff;
                  }
                
      `}</style>

    </React.Fragment>
  );
}




