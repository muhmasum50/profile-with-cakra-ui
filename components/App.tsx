import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";

import Header from "../components/Header";
import Profile from "../components/Profile";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
          piXELdev
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          onClick={() =>
            window.open("https://www.linkedin.com/in/muhmasum50/")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          onClick={() =>
            window.open("https://github.com/muhmasum50")}
        ></IconButton>

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />} 
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>

      <Header></Header>
      <Profile></Profile>

    </VStack>
  );
}
