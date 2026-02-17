import './ProductDetail.css'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`).then(item => item.json()).then(product => setProduct(product));
  }, [id]);

  return (
    <div className="product-details">
        <div className='product-head'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
        
        <div className='product-price'>
            <p>{product.price}</p>
            <p>{product.discountPercentage}%</p>
        </div>
        <div className='product-extra'>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Weight: {product.weight}</p>
            <p>Availability: {product.availabilityStatus}</p>
        </div>
    </div>
  );
}

export default ProductDetail;