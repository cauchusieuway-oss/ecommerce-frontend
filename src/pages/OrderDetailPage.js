import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../api/api";

function OrderDetailPage() {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        api.get(`/orders/${id}`).then(res => setOrder(res.data));
    }, [id]);

    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h2>Order #{order.id}</h2>
            <p>Total: {order.total}</p>

            {order.items.map(i => (
                <div key={i.id} className="border p-2 rounded mb-2">
                    <p className="font-semibold">
                        {i.product?.name || "Unknown"}
                    </p>
                    <p className="text-gray-500">
                        {i.quantity} x {i.price}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default OrderDetailPage;