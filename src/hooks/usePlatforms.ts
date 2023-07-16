import { useQuery } from "react-query";
import platforms from "../data/platforms";
import platformService from "../services/platformService";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    staleTime: ms("24h"),
    initialData: platforms,
    queryKey: ["platforms"],
    queryFn: () => platformService.getAll().request.then((res) => res.data),
  });

export default usePlatforms;
