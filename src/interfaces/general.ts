import { ChangeHandler, FieldError, FieldValues, RefCallBack, SetValueConfig, UseFormHandleSubmit } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface ControllerProps<P> {
    error?: FieldError;
    ref: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    setValue: (val: P, options?: SetValueConfig) => void;
}

export interface FormProps<T extends {}> {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    controls: Record<keyof T, ControllerProps<T[keyof T]>>;
}
