import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack>
          <SkeletonCircle boxSize="32px" borderRadius={8} />
          <SkeletonText />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
