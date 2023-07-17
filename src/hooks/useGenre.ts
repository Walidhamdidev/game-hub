import useGameQueryStore from "../store";
import useGenres from "./useGenres";

const useGenre = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery?.genreId);
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === genreId);
};

export default useGenre;
