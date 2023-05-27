import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/Card';
import { asyncFetchAllProducts } from '../redux/features/HomeSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(state => state.Home);

  useEffect(() => {
    dispatch(asyncFetchAllProducts());
  }, [dispatch])

  return (
    <>
      <Box marginY={3}>
        {
          loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress color="secondary" />
            </Box>) : (
            <Grid container spacing={2}>
              {
                products.map(product => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product?.id} >
                    <ProductCard product={product} />
                  </Grid>
                ))
              }
            </Grid>
          )
        }
      </Box>
    </>
  )
}

export default HomePage;