import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import StarRatings from 'react-star-ratings';
import { add } from '../store/cartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async ()=> {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } 
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        // store product in redux store
        dispatch(add(product));
    }
  return (
    <div className='productsWrapper'>
        {
            products.map(product => (
                <div className='card' key={product.id}>
                    <img src={product.image} alt=''/>
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    <StarRatings 
                        rating={product.rating.rate}
                        starDimension="20px"
                        starRatedColor="#fdb44b"
                        className="stars"
                    />
                    <button className='btn' onClick={() =>handleAdd(product)}>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products