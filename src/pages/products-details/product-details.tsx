import { Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import React from 'react'
import { Product } from '../../services/client/client';
import { useGetProductByIdQuery } from '../../services/endpoints/queries/getProductByIdQuery';
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useGetProductByIdQuery(parseInt(id!));

  if (isLoading)
  {
    return <CircularProgress />
  }

  if ( isError) {
    return <span>Error: {error.message}</span>
  }

  const product: Product = data!;

  return <>
    <div className="container">
    <Card sx={{ maxWidth: 1000 }} className="card">
      <CardContent>
        <Typography variant="h1" color="text.secondary">
          { product.name }
        </Typography>
        <CardMedia
        sx={{ height: 140 }}
        image={ product.imageUrl }
        title="title"
        />
        <Typography gutterBottom variant="h5" component="div">
          Category: { product.category }
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Description: { product.description }
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Price: { product.price }
        </Typography>
      </CardContent>
    </Card>
    </div>
  </>
}
