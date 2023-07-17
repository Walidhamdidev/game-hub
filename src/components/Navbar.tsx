import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchModeSwitch from "./SwitchModeSwitch";
import SearchInput from "./SearchInput";


const Navbar = () => {

  return (
    <HStack padding="10px" fontSize={{ base: "sm", md: "md" }}>
      <Image boxSize={{ base: "40px", md: "60px" }} src={logo} alt="logo" />
      <SearchInput/>
      <SwitchModeSwitch />
    </HStack>
  );
};

export default Navbar;
