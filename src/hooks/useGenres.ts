import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import genreService, { Genre } from "../services/genreService";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const { request, cancel } = genreService.getAll();
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
