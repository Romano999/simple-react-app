import { Card, CircularProgress } from '@mui/material';
import React from 'react'
import { MediaCard } from '../components/media-card';
import { Client, Product } from '../services/client/client'
import { useGetAllProductsQuery } from '../services/endpoints/queries/getAllProductsQuery';

export const Products = () => {
  const { isLoading, isError, data, error, isSuccess } = useGetAllProductsQuery();

  if (isLoading)
  {
    return <CircularProgress />
  }

  if ( isError) {
    return <span>Error: {error.message}</span>
  }

  const products: Product[] = data!;

  return <>
    {products.map(product => {
      return <MediaCard imageUrl={product.imageUrl} title={product.name} description={product.description} />
    })}
  </>
}
