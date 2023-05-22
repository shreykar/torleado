import axios from "axios";

const api = axios.create({
    // baseURL:(process.env.VUE_APP_BACKEND_APP_BASE_URL || "http://localhost:3001") + "/api/auth",
    baseURL: ("http://localhost:3001") + "/api/auth",
});
api.defaults.headers.common['x-access-token'] = localStorage.getItem('access-token');

api.interceptors.response.use(function (response) {
    if (response.data.data && response.data.data.accessToken) {
        window.localStorage.setItem('access-token', response.data.data.accessToken)
        return response;
    }
});

export async function login(data) {
    const response = await api
        .post(`/signin`, data)
    return response.data;
}

export async function signup(data) {
    const response = await api
        .post(`/signup`, data)
    return response.data;
}
