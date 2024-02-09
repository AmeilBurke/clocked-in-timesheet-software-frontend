import { SetStateAction, useState } from "react";
import { Account, Establishment, Role, Trade } from "../types/typeIndex";
import {
    VStack,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Box,
    Stack,
    StackDivider,
    Input,
} from "@chakra-ui/react";
import { ComponentButtonPrimary } from "../components/ComponentButtons";
import GetUserBearerToken from "../api calls/POST/GetUserBearerToken";
import saveBearerTokenToLocalStorage from "../utils/saveBearerTokenToLocalStroage";
import toast from "react-hot-toast";
import GetAccountIdFromJWT from "../api calls/GET/GetAccountIdFromJWT";
import GetIndividualAccount from "../api calls/GET/GetIndividualAccount";
import { handleAsyncGetAllEstablishments, handleAsyncGetAllRoles, handleAsyncGetAllTrades } from "../utils/useEffectAsyncFuntionsIndex";

const PageLogIn = ({
    setFullUserInfo,
    setAllTrades,
    setAllRoles,
    setAllEstablishments
}: {
    setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>;
    setAllTrades: React.Dispatch<SetStateAction<Trade[] | number>>;
    setAllRoles: React.Dispatch<SetStateAction<Role[] | number>>;
    setAllEstablishments: React.Dispatch<SetStateAction<Establishment[] | number>>;
}) => {
    const [userEmailInput, setUserEmailInput] = useState<string>("");
    const [userPasswordInput, setUserPasswordInput] = useState<string>("");

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
                    handleAsyncGetAllTrades(setAllTrades);
                    handleAsyncGetAllRoles(setAllRoles);
                    handleAsyncGetAllEstablishments(setAllEstablishments);
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
};

export default PageLogIn;
