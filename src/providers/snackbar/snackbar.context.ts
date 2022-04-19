// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { createContext } from "react";

export type OpenSnackbar = (text: string) => void;

export const SnackbarContext = createContext<OpenSnackbar | undefined>(undefined);
