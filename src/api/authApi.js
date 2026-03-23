import api from "./api";

export const register = (date) => {
    return api.post(`/auth/register`,date);
};