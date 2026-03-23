import {useEffect, useState} from "react";
import api from "../api/api";

function ShopDashboard() {
    const [shops, setShop] = useState([]);

    const [name, setName] = useState("");

    useEffect(() => {
        api.get("/shops").then(res => setShop(res.data));
    }, []);

    const createShop = async () => {
        const res = await api.post("/shops", {name});
        setShop(res.data);
    }

    return (
        <div>
            <h2>My Shops</h2>

            {shops.map(s => (
                <div key={s.id} className={"border p-4 mb-2"}>
                    <h3>{s.name}</h3>
                    <p>ID: {s.id}</p>
                </div>
            ))}

            <input
                placeholder="Shop name"
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={createShop}>
                Create Shop
            </button>
        </div>
    );
}

export default ShopDashboard;