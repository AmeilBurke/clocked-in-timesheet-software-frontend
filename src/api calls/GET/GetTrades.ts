import axios, { AxiosError } from "axios";
import getBearerTokenFromLocalStorage from "../../utils/getBearerTokenFromLocalStorage";
import { Trade } from "../../types/typeIndex";

const GetAllTrades = async (): Promise<Trade[] | number> => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/trades`, {
      headers: { Authorization: getBearerTokenFromLocalStorage() },
    })
    .then((response) => {
      // console.log(response);
      if (response.data) {
        return response.data;
      } else {
        return 500;
      }
    })
    .catch((error) => {
      // console.log(error)
      if (error instanceof AxiosError) {
        return error.response?.status;
      } else {
        return 500;
      }
    });
};

export default GetAllTrades;
