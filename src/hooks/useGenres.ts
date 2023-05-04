import { useEffect, useState } from "react";
import GenreService, { Genre } from "../services/GenreService";
import { CanceledError } from "../services/api-client";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const { request, cancel } = GenreService.getAllGenres();
    setLoading(true);
    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
