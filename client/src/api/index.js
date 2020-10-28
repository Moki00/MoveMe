import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

export const insertCard = (payload) => api.post(`/card`, payload);
export const getAllCards = () => api.get(`/cards`);
export const updateCardById = (id, payload) => api.put(`/card/${id}`, payload);
export const deleteCardById = (id) => api.delete(`/card/${id}`);
export const getCardById = (id) => api.get(`/card/${id}`);

const apis = {
    insertCard,
    getAllCards,
    updateCardById,
    deleteCardById,
    getCardById,
};

export default apis;
