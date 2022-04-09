import { useController, useForm } from "react-hook-form";

const useHomeForm = (localizedName: string) => {
    const { control } = useForm({ mode: 'onChange' });

    const {
        field: { onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name: 'location',
        control,
        defaultValue: localizedName || "",
        rules: {
            required: {
                value: true,
                message: `Please enter location`,
            },
            pattern: {
                value: /^[a-zA-Z ]+$/,
                message: "Only letters are allowed",
            },
        },
    });

    return { onInput: onChange, onBlur, innerRef: ref, valid: !invalid, error }
}

export default useHomeForm;