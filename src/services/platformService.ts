import { Platform } from "../hooks/usePlatform";
import create from "./httpService";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default create<FetchResponse<Platform>>("/platforms/lists/parents");
