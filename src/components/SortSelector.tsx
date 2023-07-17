import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const onSelectedSort = useGameQueryStore((s) => s.onSelectedSort);
  const selectedSort = useGameQueryStore((s) => s.gameQuery?.sort);

  const orderItems = [
    { name: "", label: "Relevence" },
    { name: "-added", label: "Date added" },
    { name: "-name", label: "Name" },
    { name: "-released", label: "Release date" },
    { name: "-metacritic", label: "Popularity" },
    { name: "-rating", label: "Average rating" },
  ];

  const handleMenuItemClick = (name: string) => {
    onSelectedSort(name);
  };

  const currentOrderItem = orderItems.find(
    (item) => item.name === selectedSort
  );

  return (
    <Menu>
      <MenuButton
        as={Button}
        size={{ base: "sm", md: "md" }}
        rightIcon={<BsChevronDown />}
      >
        Order by: {currentOrderItem?.label ?? "Relevence"}
      </MenuButton>
      <MenuList>
        {orderItems.map(({ name, label }) => (
          <MenuItem key={name} onClick={() => handleMenuItemClick(name)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
