import axios from "axios";
import store from '../store/index.js';

const api = axios.create({
    baseURL: ("http://localhost:3001") + "/api/user",
    // baseURL:(process.env.VUE_APP_BACKEND_APP_BASE_URL || "http://localhost:3001") + "/api/user",
});
api.interceptors.request.use(function (config) {
    // api.defaults.headers.common['x-access-token'] = localStorage.getItem('access-token');
    config.headers['x-access-token'] = localStorage.getItem('access-token');
    return config;
});

api.interceptors.response.use(function (response) {
    if (response.data.data && response.data.data.accessToken) {
        window.localStorage.setItem('access-token', response.data.data.accessToken)
        return response;
    }
});
export async function update(data) {
    const response = await api
        .post(`/update`, data)
    return response.data;
}


export async function get() {
    const response = await api.get()
    if(response.data.data && response.data.data.user)
    store.dispatch('user/login', response.data.data.user);
    return response.data;
}
