import { UseControllerProps, useForm } from "react-hook-form";
import { FormProps } from "../../interfaces/general";

export const CONTROLLER_NAME_LOCATION = 'location';

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

export const CONTROLLER_LOCATION_INPUT_RULES: UseControllerProps['rules'] = {
    required: {
        value: true,
        message: `Please enter location`,
    },
    pattern: {
        value: HOME_FORM_REG_EXP,
        message: "Only letters are allowed",
    },
}

const useHomeForm = (): FormProps => {
    const { handleSubmit, register, getFieldState } = useForm({ mode: 'onChange' });

    return { 
        handleSubmit,
        controls: {
            [CONTROLLER_NAME_LOCATION]: {
                ...register(CONTROLLER_NAME_LOCATION),
                error: getFieldState(CONTROLLER_NAME_LOCATION).error,
            }
        }
    };
}

export default useHomeForm;