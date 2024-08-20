import axios from "../../axios/axios";

export const signIn = async (signInData) => {
  const res = axios.post("/auth/login", signInData);
  return res;
};
