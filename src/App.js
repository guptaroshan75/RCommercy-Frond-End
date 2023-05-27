import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import SingleProductPage from './pages/SingleProductPage';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from '@mui/system';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:name' element={<SingleProductPage />} /> 
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;