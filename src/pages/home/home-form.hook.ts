import { UseControllerProps } from "react-hook-form";

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

// INFO: this relavent for autocomplete with form and submit
// export const CONTROLLER_NAME_LOCATION = 'location';

// export interface HomeForm {
//     [CONTROLLER_NAME_LOCATION]: Location['key'];
// }

// const useHomeForm = (defaultLocation: Location): FormProps<HomeForm, Location, Location['key']> => {
//     const { handleSubmit, register, getFieldState, setValue } = useForm<HomeForm>({ mode: 'onChange', defaultValues: { [CONTROLLER_NAME_LOCATION]: defaultLocation.key } });
    
//     return { 
//         handleSubmit,
//         controls: {
//             [CONTROLLER_NAME_LOCATION]: {
//                 ...register(CONTROLLER_NAME_LOCATION),
//                 error: getFieldState(CONTROLLER_NAME_LOCATION).error,
//                 setValue: (val, options) => setValue(CONTROLLER_NAME_LOCATION, val, options),
//                 defaultOption: defaultLocation
//             }
//         }
//     };
// }

// export default useHomeForm;