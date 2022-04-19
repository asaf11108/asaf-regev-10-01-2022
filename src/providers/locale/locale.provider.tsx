// Delete context provider after issue solved
// https://github.com/date-fns/date-fns/issues/816

import { FC, useEffect, useState } from "react";
import getUserLocale from "get-user-locale";
import { Locale } from "date-fns";
import { LocaleContext } from "./locale.context";

export const userLocale = getUserLocale();

export const LocaleProvider: FC = ({ children }) => {
  const [locale, setLocale] = useState<Locale>();
  
  useEffect(() => {
    const importLocaleFile = async () => {
      // This webpack option stops all of the date-fns files being imported and chunked.
      const localeToSet = await import(
        /* webpackMode: "lazy", webpackChunkName: "df-[index]", webpackExclude: /_lib/ */
        `date-fns/locale/${userLocale}/index.js`
      );
      setLocale(localeToSet.default);
    };

    importLocaleFile();

  }, []);
  
    return (
      <LocaleContext.Provider value={locale}>
        {children}
      </LocaleContext.Provider>
    );
  };