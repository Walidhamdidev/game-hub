import { useQuery } from "react-query";
import platforms from "../data/platforms";
import platformService from "../services/platformService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll().request.then((res) => res.data),
  });

export default usePlatforms;
