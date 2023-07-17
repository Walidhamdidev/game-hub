import useGameQueryStore from "../store";
import usePlatforms from "./usePlatforms";

const usePlatform = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery?.platformId);
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === platformId);
};

export default usePlatform;
