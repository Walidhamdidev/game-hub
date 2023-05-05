import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import CroppedImage from "../services/cropped-image";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.platforms.map(({ platform }) => platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading paddingBottom="10px" fontSize={25}>
          {game.name}
        </Heading>
        <Box marginTop={1}>
          <Emoji ratingTop={game.rating_top} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default GameCard;
