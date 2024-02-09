import axios, { AxiosError } from "axios";
import getBearerTokenFromLocalStorage from "../../utils/getBearerTokenFromLocalStorage";
import { Establishment } from "../../types/typeIndex";

const GetAllEstablishments = async (): Promise<Establishment[] | number> => {
  return await axios.get(`${import.meta.env.VITE_API_URL}/establishments`, {
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
      if (error instanceof AxiosError) {
        return error.response?.status;
      } else {
        return 500;
      }
    });
};

export default GetAllEstablishments;
