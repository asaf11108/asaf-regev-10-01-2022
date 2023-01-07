import { useInsertionEffect } from "react";
import getUserLocale from "get-user-locale";
import { setDefaultOptions } from "date-fns";

export const useLocale = () => {

  useInsertionEffect(() => {
    // Get user language from the window navigator service
    const userLocale = getUserLocale();

    // Currently the appplication only supports english language
    const supportedLocale = userLocale.includes('en') ? userLocale : 'en-US';

    const importLocaleFile = async () => {
      // This webpack option stops all of the date-fns files being imported and chunked.
      const localeToSet = await import(
        /* webpackMode: "lazy", webpackChunkName: "df-[index]", webpackExclude: /_lib/ */
        `date-fns/locale/${supportedLocale}/index.js`
      );
      setDefaultOptions({ locale: localeToSet.default });
    };

    importLocaleFile();

  }, []);

};
