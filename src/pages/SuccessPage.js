import {useCart} from "../context/CartContext";
import {useEffect} from "react";

function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart;
    }, []);

    return <h1>Payment Success </h1>;
}