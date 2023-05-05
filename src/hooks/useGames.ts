import { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import gameService, { Game } from "../services/gameService";
import { GameQuery } from "../App";

const useGames = (gameQuery: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll(gameQuery);

    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [gameQuery?.genre?.id, gameQuery?.platform?.id]);

  return { games, error, isLoading };
};

export default useGames;
