import { useController, useForm } from "react-hook-form";
import { FormProps } from "../../interfaces/general";

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

export const CONTROLLER_NAME_LOCATION = 'location';

const useHomeForm = () => {
    const { handleSubmit, register, formState, getFieldState } = useForm({ mode: 'onChange' });

    return { 
        handleSubmit,
        register,
        formState,
        getFieldState
    };
}

export default useHomeForm;