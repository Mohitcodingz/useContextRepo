import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

export default function App() {
  const sampleProduct = { id: 1, name: 'Wireless Headphones', price: 99 };

  return (
    <CartProvider>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Navbar />
        <h2>E-Commerce Store</h2>
        <ProductCard product={sampleProduct} />
      </div>
    </CartProvider>
  );
}