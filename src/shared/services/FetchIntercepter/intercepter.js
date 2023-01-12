// import { getAuthenticationToken } from "../utils/Constants";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { store, toggleLoader } from "@redux";

export const fetchWrapper = async (
  url,
  method,
  token,
  body,
  loader = false,
  isFormData = false
) => {
  if (loader) store.dispatch(toggleLoader({ isLoading: true }));
  let headers;
  if (isFormData) {
    headers = {
      "Content-Type": "multipart/form-data",
    };
  } else {
    headers = {
      "Content-Type": "application/json",
    };
  }
  if (token) {
    const userToken = await AsyncStorage.getItem("token");
    headers.Authorization = "Bearer " + userToken;
  }

  let structure = {
    method: method,
    headers: headers,
    cache: "no-cache",
  };
  if (method !== "GET") {
    if (body) structure.body = JSON.stringify(body);
  }
  // console.log(url,structure,'datatat');
  return fetch(url, structure)
    .then(async (data) => {
      // console.log(data, "tttt");
      store.dispatch(toggleLoader({ isLoading: false }));
      let Data = await data.json();
      return Data;
    })
    .catch((error) => {
      store.dispatch(toggleLoader({ isLoading: false }));
      // if (isTimeout) clearTimeout(clearSetTimeout);
      console.log(error, "api errror");
    });
};
