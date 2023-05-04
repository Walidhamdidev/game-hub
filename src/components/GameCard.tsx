import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/GameService";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={5} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={25}>{game.name}</Heading>
        
        <PlatformIconList
          platforms={game.platforms.map(({ platform }) => platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
