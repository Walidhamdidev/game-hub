import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    error,
    isLoading,
    data: games,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;

  return (
    <Box padding="10px">
      <SimpleGrid
        spacing={4}
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
        {games?.pages.map((page, index) => {
          return (
            <React.Fragment key={index}>
              {page?.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          );
        })}
      </SimpleGrid>
      <Button my={5} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    </Box>
  );
};

export default GameGrid;
