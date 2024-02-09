import {
    Box,
    Button,
    HStack,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    VStack,
    Text
} from "@chakra-ui/react";
import { Account, Role, Trade } from "../types/typeIndex";
import { SettingsIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import React from "react";
import { menuDrawer, menuSettingItems } from "./subComponents/subComponentsIndex";
import ComponentNavigationLinks from "./ComponentNavigationLinks";
import getTradeNameFromId from "../utils/getTradeNameFromId";
import getRoleNameFromId from "../utils/getRoleNameFromId";

const ComponentNavbar = ({ children, setFullUserInfo, fullUserInfo, allTrades, allRoles }: { children?: React.ReactNode; setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>, fullUserInfo: Account, allTrades: Trade[], allRoles: Role[] }) => {


    const settingMenu = (
        <Menu>
            <MenuButton as={Button} bg={[null, null, null, "transparent"]} >
                <SettingsIcon />
            </MenuButton>
            <MenuList>{menuSettingItems(setFullUserInfo)}</MenuList>
        </Menu>
    )

    const workerNavbar = (
        <VStack display={["flex", null, null, "none"]}>
            <HStack w="full" mb="4" justify="space-between">
                {menuDrawer()}
                <Heading as="h2" size="sm" fontWeight="500">DashBoard</Heading>
                {settingMenu}
            </HStack>
            {children}
        </VStack>
    );

    const desktopNavbar = (
        <HStack display={["none", null, null, "flex"]} spacing="0" alignItems="flex-start">
            <VStack position="sticky" top="0" left="0" h="100vh" justify="center" borderRight={"1px"} borderColor="gray.300">
                {<ComponentNavigationLinks />}
            </VStack>

            <VStack w="full" spacing={0}>
                <HStack position="sticky" top="0" left="0" w="full"  borderBottom={"1px"} borderColor="gray.300" bg="white">
                    <HStack  w="full" p={8} justify="space-between">
                        <VStack mr="4" spacing="0" alignItems="flex-start">
                            <Text textTransform="capitalize" >{fullUserInfo.account_name}</Text>
                            {
                                fullUserInfo.account_trade_id
                                    ? <Text fontSize="small" color="gray.600" >{getTradeNameFromId(allTrades, fullUserInfo.account_trade_id)}</Text>
                                    : <Text fontSize="small" color="gray.600" >{getRoleNameFromId(allRoles, fullUserInfo.account_role_id)}</Text> 
                            }
                        </VStack>
                        {settingMenu}
                    </HStack>
                </HStack>
                <Box w="full" p={8}>
                    {children}
                </Box>
            </VStack>
        </HStack>
    );

    return (
        <Box p={["4", null, null, "0"]}>
            {workerNavbar}
            {desktopNavbar}
        </Box>
    )
};

export default ComponentNavbar;
