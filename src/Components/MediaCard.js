import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import NumberCounter from 'number-counter';
export default function MediaCard({text, value, color}) {
  return (
    <Card className='myCard' style={{backgroundColor: color}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <NumberCounter start={1} delay={0} duration={5}  end={value}/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}