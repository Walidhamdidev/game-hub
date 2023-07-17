import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

const GameHeading = () => {
  const platform = usePlatform();
  const genre = useGenre();

  const dynamicHadingLabel = `${platform?.name ?? ""} ${
    genre?.name ?? ""
  } Games`;
  return (
    <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
      {dynamicHadingLabel}
    </Heading>
  );
};

export default GameHeading;
