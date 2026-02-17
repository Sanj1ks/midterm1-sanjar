import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";

function ProductGrid({ products }) {
  const navigate = useNavigate();

  if (!products || !products.products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-grid-container">
      {products.products.map((product) => (
        <div 
          key={product.id}
          className="product-grid"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <div className="price-rating">
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
