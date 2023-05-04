import { useState, useEffect } from "react";
import { CanceledError } from "../services/api-client";
import gameService, { Game } from "../services/gameService";
import { Genre } from "../services/genreService";

const useGames = (seletedGenre: Genre | null) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = gameService.getAll(seletedGenre);

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
  }, [seletedGenre?.id]);

  return { games, error, isLoading };
};

export default useGames;
