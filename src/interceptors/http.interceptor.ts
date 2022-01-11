import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const API_KEY = "gRf4KNnswLuVm8mG3puAI1GUOGeJTu1v";

export function httpInterceptor(setOpen: Dispatch<SetStateAction<boolean>>): void {
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
        setOpen(true);
        return Promise.reject(error);
    });
}