import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { blue } from '@material-ui/core/colors';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SchoolIcon from '@material-ui/icons/School';
import EditLocationOutlinedIcon from '@material-ui/icons/EditLocationOutlined';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style= {{ position:'absolute', top: '3.7cm', right: '3.3cm' }} >
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> 
            Credentials and Highlights <CreateRoundedIcon style={{ fontSize: 24,align:'left', color: blue[500] }}></CreateRoundedIcon>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ul style={{listStyleType:'none'}}>
                <li><LocalMallIcon style={{ fontSize: "large" }}></LocalMallIcon>Works at Student</li>
                <li><SchoolIcon style={{ fontSize: "large" }}></SchoolIcon>Studied at School</li>
                <li><EditLocationOutlinedIcon style={{ fontSize: "large" }}></EditLocationOutlinedIcon>Lives in New Delhi</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}