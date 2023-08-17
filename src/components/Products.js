import React, { useState, useEffect } from 'react'
import StarRatings from 'react-star-ratings';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async ()=> {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        } 
        fetchProducts();
    }, [])
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
                    <button className='btn'>Add to cart</button>
                </div>
            ))
        }
    </div>
  )
}

export default Products