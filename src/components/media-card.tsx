import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface MediaCardProps {
  imageUrl: string,
  title: string,
  description: string
}

export const MediaCard = (props: MediaCardProps) => {
  return <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ props.imageUrl }
        title="title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { props.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See product</Button>
      </CardActions>
    </Card>
  </>
}