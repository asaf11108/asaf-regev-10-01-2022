// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { createContext } from "react";
import { Locale } from "date-fns";

export const LocaleContext = createContext<Locale | undefined>(undefined);
