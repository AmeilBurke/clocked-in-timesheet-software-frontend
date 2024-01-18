import axios, { AxiosError } from "axios";
import getBearerTokenFromLocalStorage from "../../utils/getBearerTokenFromLocalStorage";

const GetAccountIdFromJWT = async (): Promise<number> => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/auth/profile`, {
      headers: {
        Authorization: getBearerTokenFromLocalStorage(),
      },
    })
    .then((response) => {
      return response.data.sub;
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        return error.response?.status;
      } else {
        return 500;
      }
    });
};

export default GetAccountIdFromJWT;
