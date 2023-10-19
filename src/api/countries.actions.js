// @ts-nocheck
import { requestCountriesData } from "../services/requests/countries.request";

export const fetchCountriesAction = async (queryKey) => {

    try {
      const {data} = await requestCountriesData(queryKey);
      return data;
    } catch (error) {
      throw error.response.data;
    }
};

export const fetchSingleCountryAction = async ({ queryKey }) => {
    try {
      const data = await requestCountriesData(queryKey[1]);
      return data;
    } catch (error) {
      throw error.response.data;
    }
};