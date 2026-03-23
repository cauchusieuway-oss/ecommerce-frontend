import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import OrderPage from "./pages/OrderPage";
import Navbar from "./components/Navbar";
import {CartProvider} from "./context/CartContext";
import OrderDetailPage from "./pages/OrderDetailPage";
import ShopDashboard from "./pages/ShopDashboard";
import DashboardPage from "./pages/DashboardPage";
import CartPage from "./pages/CartPage";

function App() {
  return(
      <CartProvider>
          <BrowserRouter>
              <Navbar/>
              <div className="p-4">
                  <Routes>
                      <Route path="/" element={<LoginPage/>} />
                      <Route path="/register" element={<Register/>} />
                      <Route path="/products" element={<ProductPage/>} />
                      <Route path="/create" element={<CreateProductPage/>} />
                      <Route path="/orders" element={<OrderPage/>} />
                      <Route path="/orders/:id" element={<OrderDetailPage/>} />
                      <Route path="/dashboardshop" element={<ShopDashboard/>} />
                      <Route path="/dashboard" element={<DashboardPage/>} />
                      <Route path="/cart" element={<CartPage/>} />
                  </Routes>
              </div>
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;
