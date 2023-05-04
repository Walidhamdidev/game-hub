import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "../services/platformService";

interface Props {
  onSeletedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsList = ({
  onSeletedPlatform,
  selectedPlatform,
}: Props): JSX.Element | null => {
  const { platforms, error, isLoading } = usePlatforms();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name ?? "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => onSeletedPlatform(platform)}
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
