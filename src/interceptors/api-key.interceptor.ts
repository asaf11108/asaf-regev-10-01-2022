import axios from "axios";

const API_KEY = "gRf4KNnswLuVm8mG3puAI1GUOGeJTu1v";

const apiKeyInterceptor = (): void => {
    axios.interceptors.request.use(
        config => {
            config.params = { ...config.params, apikey: API_KEY };
            return config;
        }
    );
}

export default apiKeyInterceptor;