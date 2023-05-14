import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const dynamicHadingLabel = `${gameQuery?.platform?.name ?? ""} ${
    gameQuery?.genre?.name ?? ""
  } Games`;
  return (
    <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }}>
      {dynamicHadingLabel}
    </Heading>
  );
};

export default GameHeading;
