import axios from "axios";
import { Dispatch, SetStateAction } from 'react';

const errorInterceptor = (setOpen: Dispatch<SetStateAction<boolean>>): void => {

    axios.interceptors.response.use(
        x => x,
        error => {
            setOpen(true);
            return Promise.reject(error);
        }
    );
}

export default errorInterceptor;