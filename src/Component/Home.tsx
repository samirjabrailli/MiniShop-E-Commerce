import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBasket } from "../context/BasketContext";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          axios.get("https://dummyjson.com/products?limit=20&skip=0"),
          axios.get("https://dummyjson.com/products/search?q=shirt"),
        ]);

        
        const combined = [...res1.data.products, ...res2.data.products];

        setProducts(combined);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {products.map((product: Product) => (
        <div key={product.id} className="card">
          <img src={product.images?.[0]} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <p className="price">${product.price}</p>
          <div className="button-container">
            <button className="readMore" onClick={() => navigate(`/product-detail/${product.id}`, { state: { product } })}>Read More</button>
            <button className="btn-add" onClick={() => { addToBasket(product); navigate('/card'); }}>Add to Basket</button>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default Home;