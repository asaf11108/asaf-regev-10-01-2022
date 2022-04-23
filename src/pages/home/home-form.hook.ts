import { useController, useForm } from "react-hook-form";
import { ControllerProps } from "../../interfaces/general";

export const HOME_FORM_REG_EXP = /^[a-zA-Z ]+$/;

const useHomeForm = (localizedName: string): ControllerProps => {
    const { control } = useForm({ mode: 'onChange' });

    const {
        field: { onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name: 'location',
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

    return { onInput: onChange, onBlur, innerRef: ref, valid: !invalid, error };
}

export default useHomeForm;