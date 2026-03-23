import {useCart} from "../context/CartContext";
import api from "../api/api";

function CartSidebar({ open, setOpen }) {
    const { cart, increase, decrease, remove, total, clearCart } = useCart();

    const checkout = async () => {
      await api.post("/orders/checkout", {
          items: cart.map(i => ({
              productId: i.productId,
              quantity: i.quantity
          }))
      });

      clearCart();
      alert("Order Success");
    };

    return (
        <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow transform ${open ? "translate-x-0" : "translate-x-full"} transition`}>
            <div className="p-4 border-b flex justify-between">
                <h2 className="font-bold">Cart</h2>
                <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className="p-4 space-y-3">
                {cart.map(i => (
                    <div key={i.productId} className="border p-2">
                        <p>{i.name}</p>
                        <p>{i.price}</p>
                        <div className="flex gap-2">
                            <button onClick={() => decrease(i.productId)}>-</button>
                            <span>{i.quantity}</span>
                            <button onClick={() => increase(i.productId)}>+</button>
                        </div>

                        <button onClick={() => remove(i.productId)} className="text-red-500">
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="p-4 border-t">
                <p>Total: {total}</p>

                <button
                    className="bg-green-500 text-white w-full py-2"
                    onClick={checkout}
                    >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default CartSidebar;