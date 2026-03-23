import {useCart} from "../context/CartContext";
import api from "../api/api";

function CartPage() {
    const {cart, clearCart} = useCart();

    const checkout = async () => {
        const shopId = localStorage.getItem("shopId");

        const items = cart.map((c) => ({
            productId: c.id,
            quantity: 1
        }));

        await api.post("/orders/checkout", {
            shopId,
            items
        });

        alert("Order success!");
        clearCart();
    };

    return (
        <div className="p-6">
            <h2 className="text-xl mb-4">Cart</h2>

            {cart.map((c) => (
                <div key={c.id} className="border p-3 mb-2">
                    <p>{c.name}</p>
                    <p>{c.price}</p>
                </div>
            ))}

            <button
                onClick={checkout}
                className="bg-black text-white px-4 py-2 mt-4"
                >
                Checkout
            </button>
        </div>
    );
}

export default CartPage;