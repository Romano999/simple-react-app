import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './media-card.scss';
import { Link } from '@mui/material';

export interface MediaCardProps {
  imageUrl: string,
  title: string,
  description: string,
  urlOnClick: string
}

export const MediaCard = (props: MediaCardProps) => {
  return <>
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        sx={{ height: 140 }}
        image={ props.imageUrl }
        title="title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" data-cy={props.title}>
          { props.title }
        </Typography>
        <Typography variant="body2" color="text.secondary" data-cy={props.description}>
          { props.description }
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          <Link href={`/${props.urlOnClick}`} color="text.secondary">
            <h4>Go to product</h4>
          </Link>
        </Button>
      </CardActions>
    </Card>
  </>
}