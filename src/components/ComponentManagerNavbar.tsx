import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useDisclosure, VStack } from "@chakra-ui/react";
import { Account } from "../types/typeIndex";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import toast from "react-hot-toast";
import React from "react";
import ComponentNavigationLinks from "./ComponentNavigationLinks";

const ComponentManagerNavbar = ({ children, fullUserInfo, setFullUserInfo }: { children?: React.ReactNode; fullUserInfo: Account; setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>> }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const settingItems = (
        <MenuItem
            onClick={() => {
                localStorage.removeItem("bearerToken");
                setFullUserInfo(undefined);
                toast.success("Signed out successfully.");
            }}
        >
            Sign Out
        </MenuItem>
    );

    const drawer = (
        <>
            <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label="Open menu">Open</IconButton>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>ClockedIn</DrawerHeader>
                    <DrawerBody>
                        <VStack align="start">{<ComponentNavigationLinks />}</VStack>
                    </DrawerBody>
                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );

    const mobileNavbar = (
        <VStack display={["flex", null, null, "none"]} >
            <HStack w="full" justify="space-between">
                {drawer}
                <h1>DashBoard</h1>
                <Menu>
                    <MenuButton as={Button}> <SettingsIcon /> </MenuButton>
                    <MenuList>{settingItems}</MenuList>
                </Menu>
            </HStack>
            {children}
        </VStack>
    );

    return (
        <Box p="4">
            {mobileNavbar}
            {/* {desktopNavbar} */}
        </Box>
    );
};

export default ComponentManagerNavbar;
