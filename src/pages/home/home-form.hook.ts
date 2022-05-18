import { useForm } from "react-hook-form";

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

export const CONTROLLER_NAME_LOCATION = 'location';

const useHomeForm = () => {
    const { handleSubmit, register, getFieldState } = useForm({ mode: 'onChange' });

    return { 
        handleSubmit,
        control: {
            [CONTROLLER_NAME_LOCATION]: {
                ...register(CONTROLLER_NAME_LOCATION),
                error: getFieldState(CONTROLLER_NAME_LOCATION).error
            }
        }
    };
}

export default useHomeForm;