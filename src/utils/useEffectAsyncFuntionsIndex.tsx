import GetAccountIdFromJWT from "../api calls/GET/GetAccountIdFromJWT";
import GetAllEstablishments from "../api calls/GET/GetEstablishments";
import GetIndividualAccount from "../api calls/GET/GetIndividualAccount";
import GetAllRoles from "../api calls/GET/GetRoles";
import GetAllTrades from "../api calls/GET/GetTrades";
import { Account, Establishment, Role, Trade } from "../types/typeIndex";
import getBearerTokenFromLocalStorage from "./getBearerTokenFromLocalStorage";

export const handleAsyncGetBearerTokenFromStorage = (): string | null => {
  return getBearerTokenFromLocalStorage();
};

export const handleAsyncGetFullAccountInfo = async (): Promise<Account | number> => {
  return await GetIndividualAccount(await GetAccountIdFromJWT());
};

export const handleAsyncGetAllTrades = async (setAllTrades: React.Dispatch<React.SetStateAction<Trade[] | number>>) => {
  const apiResponse = await GetAllTrades();
  setAllTrades(apiResponse);
};

export const handleAsyncGetAllRoles = async (setAllRoles: React.Dispatch<React.SetStateAction<Role[] | number>>) => {
  const apiResponse = await GetAllRoles();
  setAllRoles(apiResponse);
};

export const handleAsyncGetAllEstablishments = async (setAllEstablishments: React.Dispatch<React.SetStateAction<Establishment[] | number>>) => {
  const apiResponse = await GetAllEstablishments();
  setAllEstablishments(apiResponse);
};