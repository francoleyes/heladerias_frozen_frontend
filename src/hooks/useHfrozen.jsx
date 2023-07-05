import React from "react";
import { getMessageApi, getTempApi, getProductsApi, addOrderApi, validateCodeApi } from "../api/hfrozen";

function useHfrozen() {
  const getMessage = async () => {
    try {
      const response = await getMessageApi();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getTemp = async () => {
    try {
      const response = await getTempApi();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const getProducts = async () => {
    try {
      const response = await getProductsApi();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const addOrder = async (products) => {
    try {
      const response = await addOrderApi(products);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const validateCode = async (code) => {
    try {
      const response = await validateCodeApi(code);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return {
    getMessage,
    getTemp,
    getProducts,
    addOrder,
    validateCode
  };
}

export default useHfrozen;
