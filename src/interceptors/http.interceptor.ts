import axios from "axios";

const API_KEY = "gRf4KNnswLuVm8mG3puAI1GUOGeJTu1v";
const BAD_REQUEST = " Unable to retrieve data. Switched to mock data.";

export function httpInterceptor(): void {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        config.params = { ...config.params, apikey: API_KEY };
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
    console.log("🚀 ~ file: http.interceptor.ts ~ line 19 ~ error", error)
        return Promise.reject(error);
    });
}