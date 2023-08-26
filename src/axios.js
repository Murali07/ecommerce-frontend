import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://ecommerce-backend-bird.onrender.com",
});

export default instance;
