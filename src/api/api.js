import axios from "axios";

const api = axios.create({
    baseURL: "https://ecommerce-saas-2.onrender.com/api",
});

//gắn token vào header
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;