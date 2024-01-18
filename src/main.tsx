import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import PageAllJobs from "./pages/PageAllJobs.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-jobs",
    element: <PageAllJobs />,
  },
]);

const changes = {
  colors: {
    brand: {
      100: "#3EB489",
      200: "#3EB489",
      300: "#3EB489",
      400: "#3EB489",
      500: "#3EB489",
      600: "#3EB489",
      700: "#3EB489",
      800: "#3EB489",
      900: "#3EB489",
    },
    secondary: {
      100: "#3EB489",
      200: "#3EB489",
      300: "#3EB489",
      400: "#3EB489",
      500: "#3EB489",
      600: "#3EB489",
      700: "#3EB489",
      800: "#3EB489",
      900: "#3EB489",
    },
  }
};

const theme = extendTheme({ changes });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster />
    </ChakraProvider>
  </React.StrictMode>
);
