import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, isLoading, data: games } = useGames(gameQuery);
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;

  return (
    <SimpleGrid
      spacing={4}
      padding="10px"
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
    >
      {isLoading &&
        skeletonItems.map((item) => (
          <GameCardContainer key={item}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {games?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
