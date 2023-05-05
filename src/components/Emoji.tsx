import { Image, ImageProps } from "@chakra-ui/react";

import emoji1 from "../assets/meh.png";
import emoji2 from "../assets/recommanded.png";
import emoji3 from "../assets/exceptional.png";

interface Props {
  ratingTop: number;
}

const Emoji = ({ ratingTop }: Props) => {
  if (ratingTop < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: emoji1, alt: "meh", boxSize: "25px" },
    4: { src: emoji2, alt: "recommanded", boxSize: "25px" },
    5: { src: emoji3, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[ratingTop]} />;
};

export default Emoji;
