import axios from "axios";

export const register = (date) => {
    return axios.post(`/auth/register`,date);
};