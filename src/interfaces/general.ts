import { ChangeHandler, FieldError, FieldValues, RefCallBack, SetValueConfig, UseFormHandleSubmit } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface ControllerProps<T, Val> {
    error?: FieldError;
    defaultOption?: T;
    ref: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    setValue: (val: Val, options?: SetValueConfig) => void;
}

export interface FormProps<Form extends {}, T = any, Val = any> {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    controls: Record<keyof Form, ControllerProps<T, Val>>;
}
