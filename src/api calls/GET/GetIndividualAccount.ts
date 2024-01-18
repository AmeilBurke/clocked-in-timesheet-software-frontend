import axios, { AxiosError } from "axios";
import getBearerTokenFromLocalStorage from "../../utils/getBearerTokenFromLocalStorage";
import { Account } from "../../types/typeIndex";

const GetIndividualAccount = async (
  accountId: number
): Promise<Account | number> => {
  return await axios
    .get(`${import.meta.env.VITE_API_URL}/accounts/${accountId}`, {
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

export default GetIndividualAccount;
