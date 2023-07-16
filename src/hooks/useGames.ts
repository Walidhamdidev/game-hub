import { ResponseGame } from "../services/gameService";
import { GameQuery } from "../App";
import { useQuery } from "react-query";
import apiClient from "../services/api-client";

const useGames = (gameQuery: GameQuery) =>
  useQuery<ResponseGame, Error>({
    staleTime: 24 * 60 * 60 * 1000,
    // initialData:{cou},
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<ResponseGame>("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            patent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sort,
            search: gameQuery?.searchTerm,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
