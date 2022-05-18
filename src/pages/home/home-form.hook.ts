import { UseControllerProps, useForm } from "react-hook-form";

export const CONTROLLER_NAME_LOCATION = 'location';

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

const CONTROLLER_LOCATION_INPUT_RULES: UseControllerProps['rules'] = {
    required: {
        value: true,
        message: `Please enter location`,
    },
    pattern: {
        value: HOME_FORM_REG_EXP,
        message: "Only letters are allowed",
    },
}

const useHomeForm = () => {
    const { handleSubmit, register, getFieldState } = useForm({ mode: 'onChange' });

    const { ref, onBlur, onChange } = register(CONTROLLER_NAME_LOCATION);

    return { 
        handleSubmit,
        control: {
            [CONTROLLER_NAME_LOCATION]: {
                controlRef: ref,
                onBlur,
                onChange,
                error: getFieldState(CONTROLLER_NAME_LOCATION).error,
                inputRules: CONTROLLER_LOCATION_INPUT_RULES
            }
        }
    };
}

export default useHomeForm;