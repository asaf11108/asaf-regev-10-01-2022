import { Ref } from "react";
import { FieldError, FieldValues, Noop, UseFormHandleSubmit } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface Option {
    id: ID;
    name: string;
}

export interface ControllerProps {
    valid: boolean;
    innerRef: Ref<any>;
    error?: FieldError;
    onInput: (query: string) => void;
    onBlur: Noop;
}

export interface FormProps {
    handleSubmit: UseFormHandleSubmit<FieldValues>;
    controls: Record<string, ControllerProps>;
}
