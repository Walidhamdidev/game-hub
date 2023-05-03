import { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import { Game } from "../services/GameService";
import GameService from "../services/GameService";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = GameService.getAllGames();

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
  }, []);

  return { games, error, isLoading };
};

export default useGames;
