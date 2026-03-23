import {useEffect, useState} from "react";
import api from "../api/api";

function ShopDashboard() {
    const [shops, setShop] = useState([]);

    useEffect(() => {
        api.get("/shops").then(res => setShop(res.data));
    }, []);

    return (
        <div>
            <h2>My Shops</h2>

            {shops.map(s => (
                <div key={s.id} className={"border p-4 mb-2"}>
                    <h3>{s.name}</h3>
                    <p>ID: {s.id}</p>
                </div>
            ))}
        </div>
    );
}

export default ShopDashboard;