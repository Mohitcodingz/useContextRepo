// consumes the cart data 
import { useContext } from 'react';
import CartContext from '../context/CartContext';

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', background: '#333', color: '#fff', padding: '10px 20px' }}>
      <h3>MyShop</h3>
      <div>Cart Items: 🛒 {cart.length}</div>
    </nav>
  );
}