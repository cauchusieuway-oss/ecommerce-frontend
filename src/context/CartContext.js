import {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    //Load từ localStorage
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    //Lưu lại mỗi khi cart thay đổi
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const exist = cart.find(i => i.productId === product.id);

        if (exist) {
            setCart(
                cart.map((i) =>
                    i.productId === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                )
            );
        } else {
            setCart([...cart, { productId: product.id, name: product.name, price: product.price, quantity: 1 }]);
        }
    };

    const increase = (id) => {
        setCart(cart.map(i => i.productId === id ? { ...i, quantity: i.quantity + 1 } : i));
    };

    const decrease = (id) => {
        setCart(cart.map(i =>
            i.productId === id && i.quantity > 1
                ? { ...i, quantity: i.quantity - 1 }
                : i
        ));
    };

    const remove = (id) => {
        setCart(cart.filter(i => i.productId !== id));
    };

    const clearCart = () => setCart([]);

    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increase, decrease, remove, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
};