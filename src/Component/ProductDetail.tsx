import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

function ProductDetail() {
  const location = useLocation();
  const product: Product = location.state?.product;
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container">
      <div className="product-detail-card" onClick={() => setShowModal(true)}>
        <img src={product.images?.[0]} alt={product.title} />
        <h2>{product.title}</h2>
      </div>
      {showModal && (
        <div className="modal" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <div className="modal-left">
              <img src={product.images?.[0]} alt={product.title} />
            </div>
            <div className="modal-right">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail