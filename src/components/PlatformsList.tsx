import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformsList = (): JSX.Element | null => {
  const onSelectedPlatform = useGameQueryStore((s) => s.onSelectedPlatform);

  const { data: platforms, error, isLoading } = usePlatforms();
  const selectedPlatform = usePlatform();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton
        as={Button}
        size={{ base: "sm", md: "md" }}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformsList;
