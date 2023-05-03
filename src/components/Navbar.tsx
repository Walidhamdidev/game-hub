import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchModeSwitch from "./SwitchModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="60px" src={logo} alt="logo" />
      <SwitchModeSwitch />
    </HStack>
  );
};

export default Navbar;
