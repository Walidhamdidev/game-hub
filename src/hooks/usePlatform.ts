import { useQuery } from "react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { ResponsePlatform } from "../services/platformService";

const usePlatforms = () =>
  useQuery({
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<ResponsePlatform>("/platforms").then((res) => res.data),
  });

export default usePlatforms;
