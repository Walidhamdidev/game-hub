import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default SwitchModeSwitch;
