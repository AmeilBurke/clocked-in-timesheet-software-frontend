import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, IconButton, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, useDisclosure, VStack, Flex, StackDivider } from "@chakra-ui/react";
import { Account } from "../types/typeIndex";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { SetStateAction } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import toast from "react-hot-toast";
import React from "react";

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

    const menuLinks = (
        <>
            <ChakraLink as={ReactRouterLink} to="/">Dashboard</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/all-jobs">All Jobs</ChakraLink>
        </>
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
                        <VStack align="start">{menuLinks}</VStack>
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

    // only applies to managers
    // const desktopNavbar = (
    //     <Box display={["none", null, null, "flex"]}>
    //         <Box></Box>
    //         <Box>
    //             <Box></Box>
    //             <Box></Box>
    //         </Box>
    //     </Box>
    // );

    return (
        <Box p="4">
            {mobileNavbar}
            {/* {desktopNavbar} */}
        </Box>
    );
};

export default ComponentManagerNavbar;
