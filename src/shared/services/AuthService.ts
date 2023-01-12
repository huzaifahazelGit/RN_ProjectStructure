import { BASE_URL, BASE_URL_TRANSACTION, ENDPOINTS } from "@utils";
import { fetchWrapper } from "@services";

export const signin = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.LOGIN;
  params.isMobile = true;
  let res = await fetchWrapper(url, "POST", false, params, true);
  // console.log(res, "---response---");
  return res;
};

export const signup = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.REGISTER;
  let res = await fetchWrapper(url, "POST", false, params);
  // console.log(res, "nnnnn");
  return res;
};

export const verifyManagerPassword = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.VERIFY_MANAGER_PASSWORD;
  let res = await fetchWrapper(url, "POST", true, params, true);
  return res;
};

export const ParseEMV = async (params: any) => {
  let url = BASE_URL_TRANSACTION + ENDPOINTS.PARSE_EMV;
  let res = await fetchWrapper(url, "POST", true, params, true);
  return res;
};

export const saleOrder = async (params: any) => {
  let url = BASE_URL_TRANSACTION + ENDPOINTS.SALE_ORDER;
  let res = await fetchWrapper(url, "POST", true, params, false);
  return res;
};

export const setPasscode = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.SET_PASSCODE;
  let res = await fetchWrapper(url, "POST", true, params, true);
  return res;
};

export const verifyClerkId = async (params: any) => {
  let url = BASE_URL + ENDPOINTS.VERIFY_PASSCODE;

  let res = await fetchWrapper(url, "POST", true, params, true);
  return res;
};

export const verifyPosAdmin = async (params: any) => {
  let url = BASE_URL + "POS/auth/verify-pos-admin/" + params._id;

  delete params._id;
  let res = await fetchWrapper(url, "PUT", true, params);
  return res;
};

export const getPerms = async (params: any) => {
  let url = BASE_URL + "POS/auth/perms";
  let res = await fetchWrapper(url, "GET", true);
  return res;
};

export const resendOtpApi = async (params: any) => {
  let url = BASE_URL + "POS/auth/resend-email/" + params;
  let res = await fetchWrapper(url, "POST", true);
  return res;
};

export const getReceiptData = async (id: any) => {
  // let url =
  //   "https://tservice.plastk.ca/POS/orders/receipt/63036829e1e813b5ae384e2e";
  let url = "https://psp.plastk.ca/api/t/v1/receipt/" + id;
  let res = await fetchWrapper(url, "GET", true);
  return res;
};

export const getConfigurations = async () => {
  let url = "https://psp.plastk.ca/api/c/v1/config";
  let res = await fetchWrapper(url, "GET", true);
  return res;
};

export const updateConfigurations = async (params: any) => {
  let url = "https://psp.plastk.ca/api/c/v1/config";

  let res = await fetchWrapper(url, "POST", true, params, true);
  return res;
};
