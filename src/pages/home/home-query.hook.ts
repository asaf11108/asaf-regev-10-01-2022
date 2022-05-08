import { useState } from "react";
import usePromise from "react-use-promise";
import API from "../../api/api";
import { AutocompleteOption } from "../../api/interfaces/autocomplete";

const useHomeQuery = () => {
    const [query, setQuery] = useState<string>();
    const promiseQuery = usePromise<AutocompleteOption[]>(
      () => query ? API.getLocations(query) : Promise.resolve<AutocompleteOption[]>([]),
      [query]
    );

    return { setQuery, promiseQuery };
}

export default useHomeQuery;
