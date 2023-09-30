import { CircularProgress } from '@mui/material';
import React from 'react'
import { MediaCard } from '../../components/media-card';
import { Product } from '../../services/client/client';
import { useGetAllProductsQuery } from '../../services/endpoints/queries/getAllProductsQuery';

import './products.scss';

export const Products = () => {
  const { isLoading, isError, data, error } = useGetAllProductsQuery();

  if (isLoading)
  {
    return <CircularProgress />
  }

  if ( isError) {
    return <span>Error: {error.message}</span>
  }

  const products: Product[] = data!;

  return <>
    <div className="container">
    {products.map(product => {
        return <MediaCard key={product.id} imageUrl={product.imageUrl} title={product.name} description={product.description}  urlOnClick={`product-details/${product.id}`} />
      })}
    </div>
  </>
}
