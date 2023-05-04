import apiClient from "./api-client";

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
}

interface ResponseGame {
  count: number;
  results: Game[];
}

class GameService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllGames() {
    const controller = new AbortController();
    const request = apiClient.get<ResponseGame>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GameService("/games");
