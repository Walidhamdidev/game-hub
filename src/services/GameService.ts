import { Genre } from "./genreService";
import create from "./httpService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

export interface ResponseGame {
  count: number;
  results: Game[];
}

export default create<ResponseGame>("/games");
