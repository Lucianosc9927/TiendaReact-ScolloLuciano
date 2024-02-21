import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import "./App.css";
import { Footer } from "./components/Footer/footer";
import { Shop } from "./components/Shop/Shop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductDetailContainer } from "./components/ProductDetailContainer/ProductDetailContainer";
import { CartProvider } from "./context/Cart";
import { CartView } from "./components/CartView/CartView";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:categoryId" element={<Shop />} />
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/item/:itemId" element={<ProductDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
