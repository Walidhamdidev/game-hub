import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { ResponseGenre } from "../services/genreService";
import genres from "../data/genres";

const useGenres = () =>
  useQuery({
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<ResponseGenre>("/genres").then((res) => res.data),
  });

export default useGenres;
