// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { useContext } from "react";
import { SnackbarContext } from "./snackbar.context";

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};
