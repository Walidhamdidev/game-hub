import { GameQuery } from "../App";
import { useInfiniteQuery } from "react-query";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";
import { Genre } from "./useGenres";
import gameService from "../services/gameService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll(gameQuery, pageParam).request.then((res) => res.data),
  });

export default useGames;
