import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, isLoading, games } = useGames();
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        spacing="10px"
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
              <GameCardSkelton />
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
