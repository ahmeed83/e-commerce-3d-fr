export const ACCESS_TOKEN = 'accessToken';
export const AUTHORIZATION_VALUE = `Bearer ${localStorage.getItem(
  ACCESS_TOKEN
)}`;
export const CONTENT_TYPE_JSON_VALUE = 'application/json';
export const CONTENT_TYPE_FORM_VALUE = 'multipart/form-data';
export const USER = 'user';
export const LOGIN_URL = 'api/login';

// Product url
export const MANAGEMENT_PRODUCTS_URL = 'api/management/v1/products/';
export const PRODUCTS_URL = 'api/resources/products';

// Category url
export const CATEGORIES_URL = `${PRODUCTS_URL}/categories/`;
export const SUB_CATEGORIES_URL = `${PRODUCTS_URL}/sub-category/`;
export const MANAGEMENT_CATEGORIES_URL = 'api/management/v1/category/';
export const MANAGEMENT_SUB_CATEGORIES_URL = 'api/management/v1/sub-category/';
export const MANAGEMENT_CATEGORIES_ADD_URL = `${MANAGEMENT_CATEGORIES_URL}add-category`;
export const MANAGEMENT_SUB_CATEGORIES_ADD_URL = `${MANAGEMENT_SUB_CATEGORIES_URL}add-sub-category`;

// Customer url
export const MANAGEMENT_CUSTOMERS_URL = 'api/management/v1/customers';

// Order url
export const ORDER_URL = 'api/resources/orders';
export const ADD_ORDER_URL = `${ORDER_URL}/add-order`;
export const CHECK_STATUS_ORDER_URL = `${ORDER_URL}/checkStatus/`;
export const MANAGEMENT_ORDERS_URL = '/api/management/v1/orders';
