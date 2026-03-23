import {Link} from "react-router-dom";
import {useState} from "react";
import {useCart} from "../context/CartContext";
import CartSidebar from "./CartSidebar";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { cart } = useCart();
    return (
        <>
            <nav className="bg-blue-600 text-white p-4 flex justify-between">
                <h1>Ecommerce</h1>

                <div className="flex gap-4 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={() => setOpen(true)}>
                        Cart ({cart.length})
                    </button>
                </div>
            </nav>

            <CartSidebar open={open} setOpen={setOpen}/>
        </>
    );
}

export default Navbar;