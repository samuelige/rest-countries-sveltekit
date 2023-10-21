// @ts-nocheck
import api from '../interceptor';

export const requestCountriesData = async (query_string) => {
  return await api.get(`/${query_string}`);
};

export const requestSingleCountry = async (name) => {
  return await api.get(`/name/${name}`);
};