import { HamburgerIcon } from "@chakra-ui/icons";
import { MenuItem, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, DrawerFooter, useDisclosure, Button, Link as ChakraLink, } from "@chakra-ui/react";
import React, { SetStateAction } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Account } from "../../types/typeIndex";
import ComponentNavigationLinks from "../ComponentNavigationLinks";

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

    const { isOpen, onOpen, onClose } = useDisclosure();
    return <>
        <IconButton icon={<HamburgerIcon />} onClick={onOpen} aria-label="Open menu">Open</IconButton>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>ClockedIn</DrawerHeader>
                <DrawerBody>
                    <VStack align="start">
                        {<ComponentNavigationLinks />}
                    </VStack>
                </DrawerBody>
                <DrawerFooter></DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
};

export const menuNavLink = (icon: JSX.Element, url: string, displayText: string) => {
    return (
        <Button w="full" py="8" px={[null, null, null, "12"]} bg="transparent" leftIcon={icon}>
            <ChakraLink
                w="full"
                py="4"
                color="gray.700"
                textDecoration="underline"
                textUnderlineOffset={8}
                textDecorationColor="gray.300"
                _activeLink={
                    {
                        fontWeight: "bold",
                        textDecorationColor: "gray.600"
                    }
                }
                as={ReactRouterLink}
                to={url}
            >
                {displayText}
            </ChakraLink>
        </Button>
    )
}