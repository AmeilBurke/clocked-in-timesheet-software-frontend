import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuItem, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, DrawerFooter, Link as ChakraLink, useDisclosure } from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Account } from "../../types/typeIndex";

export const menuSettingItems = (setFullUserInfo: React.Dispatch<SetStateAction<Account | undefined>>) => {
    return <MenuItem
        onClick={() => {
            localStorage.removeItem("bearerToken");
            setFullUserInfo(undefined);
            toast.success("Signed out successfully.");
        }}
    >
        Sign Out
    </MenuItem>
};

export const menuDrawer = () => {
    const menuLinks = (
        <>
            <ChakraLink as={ReactRouterLink} to="/">Dashboard</ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/all-jobs">All Jobs</ChakraLink>
        </>
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
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
};