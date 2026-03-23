import {useEffect, useState} from "react";
import api from "../api/api";
import { Link } from "react-router-dom";

function OrderPage() {
    const [orders, setOrders] = useState([]);

    const loadOrders = async () => {
        const res = await api.get("/orders");
        setOrders([res.data]);
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div>
            <h2>My Orders</h2>
            {orders.map((o) => (
                <div key={o.id}>
                    <p>Total: {o.total}</p>
                    <Link to={`/orders/${o.id}`}>View detail</Link>
                </div>
            ))}
        </div>
    );
}

export default OrderPage;