import { BASE_API } from "../utils/constants";

export async function getMessageApi() {
  try {
    const url = `${BASE_API}/api/welcome-message/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getTempApi() {
  try {
    const API_KEY = "d81015613923e3e435231f2740d5610b";
    const LAT = "-35.836948753554054";
    const LON = "-61.870523905384076";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getProductsApi() {
  try {
    const url = `${BASE_API}/api/products/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addOrderApi(products) {
  try {
    const url = `${BASE_API}/api/create-order/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: products,
    };
    console.log(params);
    const response = await fetch(url, params);
    console.log(response);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function validateCodeApi(code) {
  try {
    const url = `${BASE_API}/api/discount/validate/?code=${code}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
