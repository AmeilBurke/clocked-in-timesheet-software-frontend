import axios, { AxiosError } from "axios";
const GetUserBearerToken = async (
  email: string,
  password: string
): Promise<{ access_token: string } | number> => {
  return axios
    .post(`${import.meta.env.VITE_API_URL}/auth/login`, {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        return error.response?.status;
      } else {
        return 500;
      }
    });
};

export default GetUserBearerToken;
