// @ts-nocheck
import api from '../interceptor';

export const requestCountriesData = async (query_string) => {
  return await api.get(`/${query_string}`);
};

export const requestSingleCountry = async (query_string, name) => {
  return await api.get(`/${query_string}/${name}`);
};