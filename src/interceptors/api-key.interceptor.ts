import axios from "axios";

const apiKeyInterceptor = (): void => {
    axios.interceptors.request.use(
        config => {
            config.params = { ...config.params, apikey: process.env.REACT_APP_API_KEY };
            return config;
        }
    );
}

export default apiKeyInterceptor;