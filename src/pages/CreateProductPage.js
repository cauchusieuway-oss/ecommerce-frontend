import {useState} from "react";
import api from "../api/api";

function CreateProductPage() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    const [shopId, setShopId] = useState("");
    const [file, setFile] = useState(null);

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await api.post("/upload", formData);
        return res.data;
    };

    const handleCreate = async () => {
        const imageUrl = await uploadImage();
        try {
            await api.post(
                `/products?name=${name}&price=${price}&imageUrl=${imageUrl}&shopId=${shopId}`
            );
            alert("Created!");
        } catch (err) {
            alert("Error");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Create Product</h2>

            <input
                className="border p-2 w-full mb-2"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}/>
            <input
                className="border p-2 w-full mb-2"
                placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
            <input
                className="border p-2 w-full mb-2"
                type="file" onChange={(e) => setFile(e.target.files[0])}/>
            <input
                className="border p-2 w-full mb-4"
                placeholder="Shop ID" onChange={(e) => setShopId(e.target.value)}/>

            <button
                className="bg-blue-500 text-white w-full py-2 rounded"
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
    );
}

export default CreateProductPage;