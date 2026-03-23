import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import OrderPage from "./pages/OrderPage";
import Navbar from "./components/Navbar";
import {CartProvider} from "./context/CartContext";
import OrderDetailPage from "./pages/OrderDetailPage";
import ShopDashboard from "./pages/ShopDashboard";

function App() {
  return(
      <CartProvider>
          <BrowserRouter>
              <Navbar/>
              <div className="p-4">
                  <Routes>
                      <Route path="/" element={<LoginPage/>} />
                      <Route path="/products" element={<ProductPage/>} />
                      <Route path="/create" element={<CreateProductPage/>} />
                      <Route path="/orders" element={<OrderPage/>} />
                      <Route path="/orders/:id" element={<OrderDetailPage/>} />
                      <Route path="dashboard" element={<ShopDashboard/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;
