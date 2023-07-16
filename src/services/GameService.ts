import { Game } from "../hooks/useGames";
import { FetchResponse } from "./api-client";
import create from "./httpService";



export default create<FetchResponse<Game>>("/games");
