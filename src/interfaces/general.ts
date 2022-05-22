import { ChangeHandler, FieldError, FieldValues, RefCallBack, UseControllerProps, UseFormHandleSubmit } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface ControllerProps {
    error?: FieldError;
    ref: RefCallBack;
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
}

export interface FormProps {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    controls: Record<string, ControllerProps>;
}
