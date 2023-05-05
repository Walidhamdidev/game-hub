import { GameQuery } from "../App";
import apiClient from "./api-client";

class HttpService<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(gameQuery?: GameQuery) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sort,
        search: gameQuery?.searchTerm,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default create;
