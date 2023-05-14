import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchModeSwitch from "./SwitchModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearchTerm: (searchTerm: string) => void;
}

const Navbar = ({ onSearchTerm }: Props) => {
  return (
    <HStack padding="10px" fontSize={{ base: "sm", md: "md" }}>
      <Image boxSize={{ base: "40px", md: "60px" }} src={logo} alt="logo" />
      <SearchInput onSearchTerm={onSearchTerm} />
      <SwitchModeSwitch />
    </HStack>
  );
};

export default Navbar;
