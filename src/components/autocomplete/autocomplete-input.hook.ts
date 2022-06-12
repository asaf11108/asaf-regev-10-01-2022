import { useForm, useController, UseControllerProps } from "react-hook-form";

export const useAutocompleteInput = (defaultValue: string, rules: UseControllerProps['rules']) => {
    const { control } = useForm<{ name: string }>({ mode: 'onChange' });
    return useController({
      name: "name",
      control,
      defaultValue,
      rules,
    });
}
