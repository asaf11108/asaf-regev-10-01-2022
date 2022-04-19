import axios from "axios";
import { OpenSnackbar } from "../providers/snackbar/snackbar.context";

const errorInterceptor = (openSnackbar: OpenSnackbar | undefined): void => {

    axios.interceptors.response.use(
        x => x,
        error => {
            openSnackbar?.('Unable to retrieve data. Switched to mock data.');
            return Promise.reject(error);
        }
    );
}

export default errorInterceptor;