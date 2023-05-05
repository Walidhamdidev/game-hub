import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./services/genreService";
import PlatformsList from "./components/PlatformsList";
import { Platform } from "./services/platformService";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string | null;
  searchTerm: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: `200px 1fr`,
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearchTerm={(searchTerm) =>
            setGameQuery({ ...gameQuery, searchTerm })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectedGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Box paddingY={7}>
            <GameHeading gameQuery={gameQuery} />
          </Box>
          <Flex gap={5} marginBottom="15px">
            <PlatformsList
              selectedPlatform={gameQuery.platform}
              onSeletedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSort={gameQuery.sort}
              onSelectedSort={(sort) => setGameQuery({ ...gameQuery, sort })}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
