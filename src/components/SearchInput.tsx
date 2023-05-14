import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { KeyboardEvent, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchTerm: (searchTerm: string) => void;
}

const SearchInput = ({ onSearchTerm }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBlur = () => {
    if (searchInputRef.current) {
      searchInputRef?.current?.blur();
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInputRef.current) {
      searchInputRef?.current?.blur();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearchTerm(searchTerm);
    setSearchTerm("");
    // Clear the input field after the user submits the search
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchInputRef}
          borderRadius={20}
          variant="filled"
          placeholder="Search games..."
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          value={searchTerm}
          onChange={handleChange}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
