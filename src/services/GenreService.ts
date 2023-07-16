import { Genre } from "../hooks/useGenres";
import create from "./httpService";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default create<FetchResponse<Genre>>("/genres");
