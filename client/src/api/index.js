import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
});

// export const insertMovie = payload => api.post(`/movie`, payload)
// export const getAllMovies = () => api.get(`/movies`)
// export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getCardById = (id) => api.get(`/card/${id}`); // not sure how this is going to work

const apis = {
    // insertMovie,
    // getAllMovies,
    // updateMovieById,
    // deleteMovieById,
    getCardById,
};

export default apis;
