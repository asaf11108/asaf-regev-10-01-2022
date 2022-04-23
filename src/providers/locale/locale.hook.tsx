// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { useContext } from "react";
import { LocaleContext } from "./locale.context";

export const useLocale = () => {
  return useContext(LocaleContext);
};
