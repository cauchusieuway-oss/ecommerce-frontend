import {useState} from "react";
import api from "../api/api";

function LoginPage() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.token);
            alert("Login success");
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-6 rounded shadow w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                    className="border p-2 w-full mb-2"
                    placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input
                    className="border p-2 w-full mb-4"
                    placeholder="password" type="password"
                onChange={(e) => setPassword(e.target.value)}/>
                <button
                    className="bg-blue-500 text-white w-full py-2 rounded"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginPage;