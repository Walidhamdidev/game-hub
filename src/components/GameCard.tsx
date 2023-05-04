import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { Game } from "../services/GameService";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import CroppedImage from "../services/cropped-image";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image src={CroppedImage(game.background_image)} />
      <CardBody>
        <Heading fontSize={25}>{game.name}</Heading>

        <HStack justifyContent="space-between" alignItems="center">
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
