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

function App() {
  const [userEmailInput, setUserEmailInput] = useState<string>("");
  const [userPasswordInput, setUserPasswordInput] = useState<string>("");
  const [allTrades, setAllTrades] = useState<Trade[]>();
  const [allRoles, setAllRoles] = useState<Role[]>();
  const [allEstablishments, setAllEstablishments] = useState<Establishment[]>();

  const [fullUserInfo, setFullUserInfo] = useState<Account | undefined>(undefined);

  const handleGetBearerTokenFromStorage = (): string | null => {
    return getBearerTokenFromLocalStorage();
  };

  const handleGetFullAccountInfo = async (): Promise<Account | number> => {
    return await GetIndividualAccount(await GetAccountIdFromJWT());
  };

  const handleGetAllTrades = async () => {
    const apiResponse = await GetAllTrades()
    if (typeof apiResponse !== 'number') {
      setAllTrades(apiResponse);
    }
  };

  const handleGetAllRoles = async () => {
    const apiResponse = await GetAllRoles()
    if (typeof apiResponse !== 'number') {
      setAllRoles(apiResponse);
    }
  };

  const handleGetAllEstablishments = async () => {
    const apiResponse = await GetAllEstablishments()
    if (typeof apiResponse !== 'number') {
      setAllEstablishments(apiResponse);
    }
  };

  useEffect(() => {
    const bearerTokenCheck = handleGetBearerTokenFromStorage();
    if (bearerTokenCheck !== null && fullUserInfo === undefined) {
      handleGetFullAccountInfo().then(response => {
        if (response !== undefined && typeof response !== 'number') {
          setFullUserInfo(response);
        }
      });
    }

    if (allTrades === undefined || typeof allTrades === 'number') {
      handleGetAllTrades();
    }

    if (allRoles === undefined || typeof allRoles === 'number') {
      handleGetAllRoles();
    }

    if (allEstablishments === undefined || typeof allEstablishments === 'number') {
      handleGetAllEstablishments();
    }

  }, [fullUserInfo]);

  if (fullUserInfo !== undefined && allTrades !== undefined && allEstablishments !== undefined && allRoles !== undefined) {
    return <PageDashboard fullUserInfo={fullUserInfo} setFullUserInfo={setFullUserInfo} allTrades={allTrades} allEstablishments={allEstablishments} allRoles={allRoles} />;
  }

  const logUserInHandler = async () => {
    if (
      userEmailInput.includes("@") &&
      userEmailInput !== "" &&
      userPasswordInput !== ""
    ) {
      const apiCall = await GetUserBearerToken(
        userEmailInput,
        userPasswordInput
      );

      if (typeof apiCall !== "number") {
        saveBearerTokenToLocalStorage(apiCall.access_token);
        const fullAccountInfo = await GetIndividualAccount(
          await GetAccountIdFromJWT()
        );

        if (typeof fullAccountInfo !== "number") {
          setFullUserInfo(fullAccountInfo);
          toast.success("Login successfull.");
        } else {
          toast.error(
            "There was an error with logging you in. try again later."
          );
        }
      } else {
        toast.error("Check your email or password & try again.");
      }
    } else {
      toast.error("Check your email or password & try again.");
    }
  };

  return (
    <VStack h="100vh" alignItems="center" justifyContent="center" bg="gray.100">
      <Card>
        <CardHeader>
          <Heading size="md">ClockedIn - Timesheet Software</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading mb="4" size="xs" textTransform="uppercase">
                Email
              </Heading>
              <Input
                placeholder="Email"
                onChange={(event) =>
                  setUserEmailInput(
                    event.target.value.toLocaleLowerCase().trim()
                  )
                }
              />
            </Box>
            <Box>
              <Heading mb="4" size="xs" textTransform="uppercase">
                Password
              </Heading>
              <Input
                placeholder="Password"
                onChange={(event) => setUserPasswordInput(event.target.value)}
              />
            </Box>
            <Box alignSelf="flex-end">
              <ComponentButtonPrimary
                textToDisplay="Log In"
                onClickFunction={logUserInHandler}
              />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
}

export default App;
