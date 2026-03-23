import {useState} from "react";
import {register} from "../api/authApi";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            await register({email, password});
            alert("Đăng ký thành công");
        } catch (err) {
            alert("Lỗi đăng ký!");
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Đăng Ký</h2>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Đăng ký</button>
        </div>
    );
}