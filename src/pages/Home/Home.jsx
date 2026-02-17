import { useState, useEffect } from "react";
import ProductGrid from "../../components/ProductGrid";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products").then(item => item.json()).then(products => setProducts(products));
    }, [search]);

  return (
    <div className="products">
      <h1>Catalog Products</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Product..."
      />

      <ProductGrid products={products} />
    </div>
  );
}

export default Home;