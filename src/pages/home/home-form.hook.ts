import { useController, useForm } from "react-hook-form";
import { FormProps } from "../../interfaces/general";

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

export const CONTROLLER_NAME_LOCATION = 'location';

const useHomeForm = (localizedName: string): FormProps => {
    const { control, handleSubmit } = useForm({ mode: 'onChange' });

    const {
        field: { onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name: CONTROLLER_NAME_LOCATION,
        control,
        defaultValue: localizedName,
        rules: {
            required: {
                value: true,
                message: `Please enter location`,
            },
            pattern: {
                value: HOME_FORM_REG_EXP,
                message: "Only letters are allowed",
            },
        },
    });

    return { 
        handleSubmit,
        controls: {
            [CONTROLLER_NAME_LOCATION]: { onInput: onChange, onBlur, innerRef: ref, valid: !invalid, error }
        }
    };
}

export default useHomeForm;