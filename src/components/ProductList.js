
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Product from "./Product"
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

const ProductList = () => {

    //ACCESSING OUR REDUX STORE
    const products = useSelector((state) => state);

    const dispatch = useDispatch();

    //FETCHING THE DATA
    const getProducts = async () => {
        const res = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(res.data));
    }
    useEffect(()=> {
        getProducts();
    },[]);

    console.log(products);

  return (
    <div className='ui grid four column wide'>
        <Product/>
    </div>
  )
}

export default ProductList;