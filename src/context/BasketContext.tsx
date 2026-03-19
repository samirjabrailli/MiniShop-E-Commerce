import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

interface BasketContextType {
  basket: Product[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (id: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) throw new Error('useBasket must be used within BasketProvider');
  return context;
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basket, setBasket] = useState<Product[]>([]);

  const addToBasket = (product: Product) => {
    setBasket(prev => [...prev, product]);
  };

  const removeFromBasket = (id: number) => {
    setBasket(prev => prev.filter(product => product.id !== id));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};