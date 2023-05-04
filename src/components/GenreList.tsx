import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CroppedImage from "../services/cropped-image";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletonItems = [1, 2, 3, 4, 5, 6];

  if (isLoading)
    return skeletonItems.map((item) => <GenreListSkeleton key={item} />);
  if (error) return;

  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={CroppedImage(genre.image_background)}
              />
              <Text fontSize="lg"> {genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
