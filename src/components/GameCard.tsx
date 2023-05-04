import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import CroppedImage from "../services/cropped-image";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={CroppedImage(game.background_image)} />
      <CardBody>
        <Heading paddingBottom="10px" fontSize={25}>
          {game.name}
        </Heading>

        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.platforms.map(({ platform }) => platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
