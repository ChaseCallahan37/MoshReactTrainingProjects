import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const loginToken = "token";
http.setJwt(getJwt());

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem(loginToken, jwt);
}

export function getJwt() {
  return localStorage.getItem(loginToken);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(loginToken, jwt);
}

export function logout() {
  localStorage.removeItem(loginToken);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(loginToken);
    return jwtDecode(jwt);
  } catch (e) {
    return null;
  }
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
