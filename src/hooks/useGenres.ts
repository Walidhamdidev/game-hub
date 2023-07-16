import { useQuery } from "react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    staleTime: ms("24h"),
    initialData: genres,
    queryKey: ["genres"],
    queryFn: () => genreService.getAll().request.then((res) => res.data),
  });

export default useGenres;
