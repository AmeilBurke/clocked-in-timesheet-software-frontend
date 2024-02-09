import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  VStack,
  Input,
  Spinner,
} from "@chakra-ui/react";
import "./App.css";
import { ComponentButtonPrimary } from "./components/ComponentButtons";
import { useEffect, useState } from "react";
import GetUserBearerToken from "./api calls/POST/GetUserBearerToken";
import toast from "react-hot-toast";
import saveBearerTokenToLocalStorage from "./utils/saveBearerTokenToLocalStroage";
import GetAccountIdFromJWT from "./api calls/GET/GetAccountIdFromJWT";
import GetIndividualAccount from "./api calls/GET/GetIndividualAccount";
import { Account, Establishment, Role, Trade } from "./types/typeIndex";
import PageDashboard from "./pages/PageDashboard";
import getBearerTokenFromLocalStorage from "./utils/getBearerTokenFromLocalStorage";
import GetAllTrades from "./api calls/GET/GetTrades";
import GetAllRoles from "./api calls/GET/GetRoles";
import GetAllEstablishments from "./api calls/GET/GetEstablishments";
import {
  handleAsyncGetAllEstablishments,
  handleAsyncGetAllRoles,
  handleAsyncGetAllTrades,
  handleAsyncGetBearerTokenFromStorage,
  handleAsyncGetFullAccountInfo,
} from "./utils/useEffectAsyncFuntionsIndex";
import PageLogIn from "./pages/PageLogIn";

function App() {
  const [allTrades, setAllTrades] = useState<Trade[] | number>([]);
  const [allRoles, setAllRoles] = useState<Role[] | number>([]);
  const [allEstablishments, setAllEstablishments] = useState<Establishment[] | number>([]);
  const [apiRequestErrorTrades, setApiRequestErrorTrades] = useState<boolean>(false);
  const [apiRequestErrorRoles, setApiRequestErrorRoles] = useState<boolean>(false);
  const [apiRequestErrorEstablishments, setApiRequestErrorEstablishments] = useState<boolean>(false);
  const [fullUserInfo, setFullUserInfo] = useState<Account | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const bearerTokenCheck = handleAsyncGetBearerTokenFromStorage();
    if (bearerTokenCheck !== null && fullUserInfo === undefined) {
      handleAsyncGetFullAccountInfo().then((response) => {
        if (response !== undefined && typeof response !== "number") {
          setFullUserInfo(response);
        }
      });
    }

    // need to rethink logic around error displays and implement loading screens

    if (typeof allTrades !== "number") {
      if (allTrades.length === 0) {
        handleAsyncGetAllTrades(setAllTrades);
        setApiRequestErrorTrades(false);
      }
    } else {
      // if (apiRequestErrorTrades === false) {
      //   if (typeof fullUserInfo !== "undefined") {
      //     toast.error(
      //       "There was an error while fetching the list of available trades. Please try again later."
      //     );
      //     setApiRequestErrorTrades(true);
      //   }
      // }
    }

    if (typeof allRoles !== "number") {
      if (allRoles.length === 0) {
        handleAsyncGetAllRoles(setAllRoles);
        setApiRequestErrorRoles(false);
      }
    } else {
      // if (apiRequestErrorRoles === false) {
      //   if (typeof fullUserInfo !== "undefined") {
      //     toast.error(
      //       "There was an error while fetching the list of available roles. Please try again later."
      //     );
      //     setApiRequestErrorRoles(true);
      //   }
      // }
    }

    if (typeof allEstablishments !== "number") {
      if (allEstablishments.length === 0) {
        handleAsyncGetAllEstablishments(setAllEstablishments);
        setApiRequestErrorEstablishments(false);
      }
    } else {
      // if (apiRequestErrorEstablishments === false) {
      //   if (typeof fullUserInfo !== "undefined") {
      //     toast.error(
      //       "There was an error while fetching the list of available establishments. Please try again later."
      //     );
      //     setApiRequestErrorRoles(true);
      //   }
      // }
    }
  }, [fullUserInfo, allTrades, allRoles, allEstablishments]);

  if (
    fullUserInfo !== undefined &&
    typeof allTrades !== "number" &&
    typeof allTrades !== undefined &&
    typeof allRoles !== "number" &&
    typeof allRoles !== undefined &&
    typeof allEstablishments !== "number" &&
    typeof allEstablishments !== undefined
  ) {
    return (
      <PageDashboard
        fullUserInfo={fullUserInfo}
        setFullUserInfo={setFullUserInfo}
        allTrades={allTrades}
        allRoles={allRoles}
        allEstablishments={allEstablishments}
      />
    );
  } else {
    return (
      <PageLogIn
        setFullUserInfo={setFullUserInfo}
        setAllTrades={setAllTrades}
        setAllRoles={setAllRoles}
        setAllEstablishments={setAllEstablishments}
      />
    );
  }
}

export default App;
