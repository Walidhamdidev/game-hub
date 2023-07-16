import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

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
