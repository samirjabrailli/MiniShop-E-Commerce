
import { useBasket } from '../context/BasketContext';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

function Basket() {
  const { basket, removeFromBasket } = useBasket();

  return (
    <div className="basket-container">
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        basket.map((product: Product) => (
          <div key={product.id} className="product-detail-card">
            <img src={product.images?.[0]} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.category}</p>
              <p className="price">${product.price}</p>
              <button className='btn-remove' onClick={() => removeFromBasket(product.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Basket