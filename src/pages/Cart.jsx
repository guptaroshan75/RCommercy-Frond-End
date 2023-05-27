import { Button, Card, CardActions, CardContent, CircularProgress, Divider, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/Card';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { loading, products } = useSelector(state => state.Cart);
  const btnType = window.location.pathname === '/cart';

  const amount = products.reduce((prevItem, currentItem) => {
    return prevItem + parseInt(currentItem.price);
  }, 0)

  const totalAmount = 40 + amount;

  return (
    <>
      <Box marginY={2}>
        {
          loading ? (<CircularProgress color="secondary" />) : (
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
                {
                  products.length === 0 ? (
                    <Box mx={'auto'}>
                      <img src='./assests/EmptyCart.svg' alt='Empty Cart' width={'60%'} />
                      <Box my={2} >
                        <Typography variant='h5' textAlign={'center'}> Cart is Empty </Typography>
                      </Box>
                      <Box mx={'auto'} width={'fit-content'} my={2} mb={3}>
                        <Button LinkComponent={Link} to='/' variant='outlined' sx={{ px: 3, py: 1 }}> Go To Homepage </Button>
                      </Box>
                    </Box>
                  ) : (
                    <Grid container spacing={1}>
                      {
                        products.map(product => (
                          <Grid item xs={12} sm={6} md={4} lg={4} key={product?.id} >
                            <ProductCard product={product} btnType={btnType} />
                          </Grid>
                        ))
                      }
                    </Grid>
                  )
                }
              </Grid>

              <Grid item xs={12} md={4} lg={4} order={{ xs: 1, md: 2 }}>
                <Card>
                  <CardContent>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography sx={{ marginBottom: 2 }}> Amount </Typography>
                      <Typography variant={'h6'} fontWeight={'bold'}> ${amount.toFixed(2)} </Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography sx={{ marginBottom: 1.5 }}> Shipping Charges </Typography>
                      <Typography variant={'h6'} fontWeight={'bold'}> $40 </Typography>
                    </Stack>
                    <Divider sx={{ marginBottom: 1.5 }} />
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography sx={{ marginBottom: 2 }}> Total Amount </Typography>
                      <Typography variant={'h6'} fontWeight={'bold'}> ${totalAmount.toFixed(2)} </Typography>
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button variant='contained' color='success' fullWidth disabled={products.length === 0 ? true : false} > Pay Now </Button>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          )
        }
      </Box>
    </>
  )
}

export default Cart;