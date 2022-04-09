import { useState } from "react";
import usePromise from "react-use-promise";
import API from "../../api/api";
import { AutocompleteOption } from "../../api/interfaces/autocomplete";
import { Location } from "../../store/favorite-locations/favorite-locations.model";

const useHomeQuery = (activeLocation: Location) => {
    const [query, setQuery] = useState<string>(activeLocation.localizedName);
    const promiseQuery = usePromise<AutocompleteOption[]>(
      () => API.getLocations(query),
      [query]
    );

    return { setQuery, promiseQuery };
}

export default useHomeQuery;
