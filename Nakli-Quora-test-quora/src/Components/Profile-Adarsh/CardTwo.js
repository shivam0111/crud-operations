import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardTwo() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style= {{ position:'absolute', top: '8.5cm', right: '3.3cm', width: '10cm' }} >
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> 
            Knows About <CreateRoundedIcon style={{ fontSize: 24,align:'left', color: blue[500] }}></CreateRoundedIcon>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ul style={{listStyleType:'none'}}>
                <li>Kendriya Vidyalaya Vikaspuri</li>
                <li>New Delhi</li>
                <li>Students</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}