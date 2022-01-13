import axios from "axios";
import { Dispatch, SetStateAction } from "react";

const API_KEY = "gRf4KNnswLuVm8mG3puAI1GUOGeJTu1v";

export function httpInterceptor(setOpen: Dispatch<SetStateAction<boolean>>): void {
    // Add a request interceptor
    axios.interceptors.request.use(
        config => {
            config.params = { ...config.params, apikey: API_KEY };
            return config;
        }
    );

    // Add a response interceptor
    axios.interceptors.response.use(
        x => x,
        error => {
            setOpen(true);
            return Promise.reject(error);
        }
    );
}