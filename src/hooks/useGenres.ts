import { useQuery } from "react-query";
import genres from "../data/genres";
import genreService from "../services/genreService";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
    queryKey: ["genres"],
    queryFn: () => genreService.getAll().request.then((res) => res.data),
  });

export default useGenres;
