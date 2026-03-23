import {useEffect, useState} from "react";
import api from "../api/api";
import { useCart } from "../context/CartContext";

function ProductPage() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        api.get("/products?shopId=1").then((res) => setProducts(res.data));
    }, []);

    return(
        <div>
            <h2 className="text-2xl font-bold mb-4">Products</h2>

            <div className="grid grid-cols-4 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border p-4 rounded shadow">
                        <p>{p.name}</p>
                        <p>{p.price}</p>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => addToCart(p)}
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;