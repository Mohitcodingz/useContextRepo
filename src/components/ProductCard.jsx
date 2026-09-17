// add to cart work here

// import { useCart } from '../context/CartContext';
import CartContext from "../context/CartContext";
import { useContext } from "react";
export default function ProductCard({ product }) {
  // Pulling the function out of our custom hook
  
  const { addToCart } = useContext(CartContext)  
  
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button 
        onClick={() => addToCart(product)}
        style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 12px', cursor: 'pointer' }}
      >
        Add to Cart
      </button>
    </div>
  );
}