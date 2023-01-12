const BASE_URL = "https://psp.plastk.ca/api/a/v1";
const BASE_URL_TRANSACTION = "https://psp.plastk.ca/api/t/v1";


const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/sign-up",
  CREATE_ORDER: "POS/orders/create",
  GET_ORDER: "POS/orders",
  GET_QR: "POS/orders/qr",
  VERIFY_PASSCODE: "/verify-passcode",
  VERIFY_MANAGER_PASSWORD: "/verify-manager-password",
  PARSE_EMV: "/decrypt-emv",
  SALE_ORDER:"/sale",
  SET_PASSCODE:"/set-passocde",
  
  
  
};

export { BASE_URL, ENDPOINTS,BASE_URL_TRANSACTION };
