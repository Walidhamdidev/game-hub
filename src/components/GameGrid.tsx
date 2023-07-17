import { SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {
    error,
    isLoading,
    data: games,

    hasNextPage,
    fetchNextPage,
  } = useGames();
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      next={() => fetchNextPage()}
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10px"
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
    </InfiniteScroll>
  );
};

export default GameGrid;
