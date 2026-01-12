import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Fonts from "./theme/fonts";
import theme from "./theme/Theme";

const system = createSystem(defaultConfig, theme);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
