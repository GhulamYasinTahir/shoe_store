import React from 'react';
import{BrowserRouter, NavLink} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
 

import LocalConvenienceStoreIcon from '@material-ui/icons/LocalConvenienceStore';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <LocalConvenienceStoreIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit">
          <li style={{display: 'inline-block'}}>
    <NavLink style={{display: 'inline-block',
        padding: '20px 16px 0 16px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        transition: '.2s',
        
  }} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}to="Launch">Launch</NavLink>
    <NavLink  style={{display: 'inline-block',
        padding: '20px 16px 0 16px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        transition: '.2s',
        }} activeStyle={{
          fontWeight: "bold",
          color: "red"
        }} to="Home" >Home</NavLink>
    <NavLink style={{display: 'inline-block',
        padding: '20px 16px 0 16px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        transition: '.2s',
      }} activeStyle={{
        fontWeight: "bold",
        color: "red"
      }} to="Contact">Contact</NavLink>
      <NavLink style={{display: 'inline-block',
        padding: '20px 16px 0 16px',
        textDecoration: 'none',
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        transition: '.2s',
      }} activeStyle={{
        fontWeight: "bold",
        color: "red"
      }} to="About">About Us</NavLink>
   
    </li>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
