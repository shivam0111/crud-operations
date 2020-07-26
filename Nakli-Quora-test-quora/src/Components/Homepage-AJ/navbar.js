import React from 'react';
import {IconButton, Typography, Toolbar, AppBar} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import GroupIcon from '@material-ui/icons/Group';
import TextField from '@material-ui/core/TextField'
import Line2 from "./Line2.png"
import Button from '@material-ui/core/Button'
import {Link, withRouter, Router} from "react-router-dom"
import CreateDialog from "../Answers-Arora/button"



function Navbar() {
  return (
    
      <div> 
        <AppBar position='sticky' style={{backgroundColor: "brown"}}>
          <Toolbar>
              
              <a href="/"><img src={Line2} /></a>
              <Typography variant="headline" color="inherit" style={{flex: 1}}>
              
              <Link to="/"><Button><HomeIcon style={{ fontSize: 40, marginLeft:"15px", marginRight:"15px"}}></HomeIcon>Home</Button></Link>
              
              <Link to="/answers"><Button><BorderColorIcon style={{ fontSize: 40, marginLeft:"15px", marginRight:"15px"}}></BorderColorIcon>Answers</Button></Link>
                  
              <Link to="/spaces"><Button><GroupIcon style={{fontSize:40, marginLeft:"15px", marginRight:"15px"}}></GroupIcon>Spaces</Button></Link>
                  
              <Link to="/notifications"><Button><NotificationsIcon style={{ fontSize: 40, marginLeft:"15px", marginRight:"15px"}}></NotificationsIcon>Notifications</Button></Link>    

              <TextField id="outlined-basic" label="Search" variant="outlined" style={{marginLeft:"15px", marginRight:"15px"}}/> 

              <Link to="/profile"><a style={{marginLeft:"15px", marginRight:"15px"}}><img src="#"></img></a></Link>

            
              

              <CreateDialog/> 
                
               
              
                </Typography>
          </Toolbar>      
        </AppBar>   
      </div>
    

  );
}

export default withRouter(Navbar);