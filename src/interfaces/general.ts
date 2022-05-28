import { ChangeHandler, FieldError, FieldValues, RefCallBack, SetValueConfig, UseFormHandleSubmit, UseFormRegisterReturn } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface ControllerProps<T, Val> extends Omit<UseFormRegisterReturn, 'ref'> {
    error?: FieldError;
    defaultOption?: T;
    controlRef: RefCallBack;
    setValue: (val: Val, options?: SetValueConfig) => void;
}

export interface FormProps<Form extends {}, T = any, Val = any> {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    controls: Record<keyof Form, ControllerProps<T, Val>>;
}
