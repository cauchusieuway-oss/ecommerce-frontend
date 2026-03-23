import {useEffect, useState} from "react";
import api from "../api/api";

function DashboardPage() {
    const [products, setProducts] = useState([]);

    const shopId = localStorage.getItem("shopId");

    const loadProducts = async () => {
        try {
            const res = await api.get(`/products?shopId=${shopId}`);
            setProducts(res.data);
        } catch (err) {
            alert("Load products failed");
        }
    };

    useEffect(() => {
        if (!shopId) {
            alert("No shop selected!");
            window.location.href = "/shops";
            return;
        }
        loadProducts();
    }, []);

    const deleteProduct = async (id) => {
        await api.delete(`/products/${id}`);
        loadProducts();
    };

    return(
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Shop Dashboard</h2>

            <button
                className="bg-black text-white px-4 py-2 mb-4"
                onChange={() => (window.location.href = "/create-product")}
            >
                + Add Product
            </button>
            <div className="grid grid-cols-4 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border p-4 rounded shadow">
                        <img
                            src={p.imageUrl}
                            className="w-full h-40 object-cover mb-2"
                        />

                        <h3 className="font-bold">{p.name}</h3>
                        <p>{p.price} đ</p>

                        <button
                            onClick={() => deleteProduct(p.id)}
                            className="bg-red-500 text-white px-3 py-1 mt-2"
                            >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;