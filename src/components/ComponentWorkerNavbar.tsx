import { Box, Button, HStack, Heading, Menu, MenuButton, MenuList, VStack } from "@chakra-ui/react";
import { Account } from "../types/typeIndex";
import { SettingsIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import React from "react";
import { menuDrawer, menuSettingItems } from "./subComponents/subComponentsIndex";

const ComponentWorkerNavbar = ({ children, setFullUserInfo }: { children?: React.ReactNode; setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>> }) => {

    const mobileNavbar = (
        <VStack display={["flex", null, null, "none"]}>
            <HStack w="full" mb="4" justify="space-between">
                {menuDrawer()}
                <Heading as="h2" size="sm" fontWeight="500" >DashBoard</Heading>
                <Menu>
                    <MenuButton as={Button}> <SettingsIcon /> </MenuButton>
                    <MenuList>{menuSettingItems(setFullUserInfo)}</MenuList>
                </Menu>
            </HStack>
            {children}
        </VStack>
    );

    return (
        <Box p="4">
            {mobileNavbar}
        </Box>
    );
};

export default ComponentWorkerNavbar;
