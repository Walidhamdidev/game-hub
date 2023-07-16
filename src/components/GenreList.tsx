import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import CroppedImage from "../services/cropped-image";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  onSelectedGenre,
  selectedGenreId,
}: Props): JSX.Element | null => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (error) return null;

  if (isLoading)
    return (
      <>
        {skeletonItems.map((item) => (
          <GenreListSkeleton key={item} />
        ))}
      </>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genre
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={CroppedImage(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontSize="lg"
                fontWeight={`${
                  genre.id === selectedGenreId ? "bold" : "normal"
                } `}
                onClick={() => {
                  onSelectedGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
