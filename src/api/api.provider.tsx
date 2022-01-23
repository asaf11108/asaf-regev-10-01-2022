import { createContext, FC, useContext } from "react";
import { IApiService } from "./api,interface";
import { getMockCurrentConditions, getMockForecasts, getMockLocations } from "./api-mock.service";
import { getCurrentConditions, getForecasts, getLocations } from "./api.service";

export const defaultApi: IApiService = process.env.REACT_APP_PRODUCTION === 'true'
  ? ({
    getLocations,
    getCurrentConditions,
    getForecasts
  })
  : ({
    getLocations: getMockLocations,
    getCurrentConditions: getMockCurrentConditions,
    getForecasts: getMockForecasts
  });
  
  const ApiContext = createContext<IApiService>(defaultApi);
  
  const ApiProvider: FC = ({ children }) => {
      return (
        <ApiContext.Provider value={defaultApi}>
            {children}
        </ApiContext.Provider>
      );
  };
  
  export const useApi = () => useContext(ApiContext);
  
  export default ApiProvider;