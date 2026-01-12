import React from "react";
import { useNavigate } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

const MainPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const bgColor = "white";
  const borderColor = "gray.200";

  const onLogout = () => {
    // sessionStorage.setItem("isAuthenticated", "false");
    // localStorage.removeItem("accessToken");
    // navigate("/login");
  };

  return (
    <Flex flexDirection={"Column"} minHeight={"100dvh"}>
      <Flex
        justifyContent={"space-between"}
        height={"3rem"}
        padding={"1rem 2rem"}
        borderBottomWidth="1px"
        borderBottomColor={borderColor}
      >
        <button onClick={() => {}}>☰</button>
        <button aria-label="close">X</button>
      </Flex>
      <Flex
        ml={{ base: 0 }}
        px={{ base: 4 }}
        alignItems="center"
        bg={bgColor}
        // justifyContent={{ base: "space-between", md: "flex-end" }}
      >
        <main style={{ padding: 16 }}>{children}</main>
      </Flex>
    </Flex>
  );
};

export default MainPage;
