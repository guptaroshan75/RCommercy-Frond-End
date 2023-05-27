import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Stack, Typography, Link } from '@mui/material';
import { AspectRatio } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { asyncAddProductToCart, asyncRemoveProductFromCart } from '../redux/features/CartSlice';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product, btnType }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(btnType ? asyncRemoveProductFromCart(product.id) : asyncAddProductToCart(product));
  }

  const productName = product?.title.split(' ').join('-')

  return (
    <Card>
      <AspectRatio ratio={'1'} objectFit={'contain'} color={'#fff'} sx={{ padding: .5 }}>
        <CardMedia component={'img'} image={product.image} />
      </AspectRatio>

      <CardContent>
        <Link underline='none' component={RouterLink} to={`/product/${productName}?id=${product?.id}`} >
          <Typography sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical'
          }}
            gutterBottom
            variant='h6'
          >
            {product?.title}
          </Typography>
        </Link>

        {
          btnType ? null : (
            <Typography gutterBottom> ${product?.price.toFixed(2)} </Typography>
          )
        }
        
        {
          btnType ? null : (
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Rating readOnly value={product?.rating?.rate} />
              <Typography> ( {product?.rating?.count} Ratings ) </Typography>
            </Stack>)
        }
      </CardContent>

      <CardActions>
        <Button
          onClick={handleSubmit}
          variant={btnType ? 'contained' : 'outlined'}
          color={btnType ? 'error' : 'primary'}
          fullWidth
        >
          {
            btnType ? 'remove from cart' : 'add to cart'
          }
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard;