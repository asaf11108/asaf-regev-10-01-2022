import { SetValueConfig, UseControllerProps, useForm } from "react-hook-form";
import { FormProps } from "../../interfaces/general";
import { Location } from "../../store/favorite-locations/favorite-locations.model";

export const CONTROLLER_NAME_LOCATION = 'location';
export interface HomeForm {
    [CONTROLLER_NAME_LOCATION]: Location['key'];
}

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

const useHomeForm = (): FormProps<HomeForm> => {
    const { handleSubmit, register, getFieldState, setValue } = useForm<HomeForm>({ mode: 'onChange' });
    
    return { 
        handleSubmit,
        controls: {
            [CONTROLLER_NAME_LOCATION]: {
                ...register(CONTROLLER_NAME_LOCATION),
                error: getFieldState(CONTROLLER_NAME_LOCATION).error,
                setValue: (val, options) => setValue(CONTROLLER_NAME_LOCATION, val, options)
            }
        }
    };
}

export default useHomeForm;