import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../services/genreService";
import { Platform } from "../services/platformService";

interface Props {
  seletedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ seletedGenre, selectedPlatform }: Props) => {
  const { error, isLoading, games } = useGames(seletedGenre, selectedPlatform);
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing="5px"
        padding="10px"
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
      >
        {isLoading &&
          skeletonItems.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games &&
          games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
