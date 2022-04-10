import { Ref } from "react";
import { FieldError, Noop } from "react-hook-form";

export type ISOString = string;

export type ID = string | number;

export interface Option {
    id: ID;
    label: string;
}

export interface ControllerProps {
    valid: boolean;
    innerRef: Ref<any>;
    error?: FieldError;
    onInput: (query: string) => void;
    onBlur: Noop;
}
