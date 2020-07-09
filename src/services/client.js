import {
  AUTHORIZATION_VALUE,
  CONTENT_TYPE_FORM_VALUE,
  CONTENT_TYPE_JSON_VALUE,
  LOGIN_URL,
  MANAGEMENT_CATEGORIES_ADD_URL,
  MANAGEMENT_CUSTOMERS_URL,
  MANAGEMENT_PRODUCTS_URL,
  MANAGEMENT_SUB_CATEGORIES_ADD_URL,
  PRODUCTS_URL,
  CATEGORIES_URL,
  SUB_CATEGORIES_URL,
  ADD_ORDER_URL,
  MANAGEMENT_ORDERS_URL,
  CHECK_STATUS_ORDER_URL,
} from './constants';
import Axios from 'axios';

const checkStatus = response => {
  if (response.status >= 200) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    response.then(e => {
      error.error = e;
    });
    return Promise.reject(error);
  }
};

export const getProductsPageFilter = (name, categoryName, page, sortBy) =>
  Axios.get(
    PRODUCTS_URL +
      `?name=${name}&categoryName=${categoryName}&page=${page}&sortBy=${sortBy}`,
    {
      headers: {
        'Content-Type': CONTENT_TYPE_JSON_VALUE,
      },
    }
  ).then(checkStatus);

export const getCategories = () =>
  Axios.get(CATEGORIES_URL, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const login = loginInfo =>
  Axios.post(LOGIN_URL, loginInfo, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const getCustomers = () =>
  Axios.get(MANAGEMENT_CUSTOMERS_URL, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const deleteProduct = productId =>
  Axios.delete(MANAGEMENT_PRODUCTS_URL + productId, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const editProduct = productId =>
  Axios.put(MANAGEMENT_PRODUCTS_URL + productId, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addProduct = product =>
  Axios.post(MANAGEMENT_PRODUCTS_URL, product, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_FORM_VALUE,
    },
  }).then(checkStatus);

export const updatePriceProduct = (productId, price) =>
  Axios.patch(MANAGEMENT_PRODUCTS_URL + productId, price, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addCategory = category =>
  Axios.post(MANAGEMENT_CATEGORIES_ADD_URL, category, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const getSubCategories = categoryId =>
  Axios.get(SUB_CATEGORIES_URL + '/' + categoryId, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addSubCategory = subCategory =>
  Axios.post(MANAGEMENT_SUB_CATEGORIES_ADD_URL, subCategory, {
    headers: {
      Authorization: AUTHORIZATION_VALUE,
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const addOrder = order =>
  Axios.post(ADD_ORDER_URL, order, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);

export const getOrders = (name, page, sortBy) =>
  Axios.get(
    MANAGEMENT_ORDERS_URL + `?name=${name}&page=${page}&sortBy=${sortBy}`,
    {
      headers: {
        Authorization: AUTHORIZATION_VALUE,
        'Content-Type': CONTENT_TYPE_JSON_VALUE,
      },
    }
  ).then(checkStatus);

export const checkOrderStatus = orderTrackId =>
  Axios.get(CHECK_STATUS_ORDER_URL + orderTrackId, {
    headers: {
      'Content-Type': CONTENT_TYPE_JSON_VALUE,
    },
  }).then(checkStatus);
