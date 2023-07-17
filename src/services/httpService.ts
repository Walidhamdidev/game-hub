import apiClient from "./api-client";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchTerm?: string;
}

class HttpService<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(gameQuery?: GameQuery, page?: number) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      params: {
        genres: gameQuery?.genreId,
        platforms: gameQuery?.platformId,
        ordering: gameQuery?.sort,
        search: gameQuery?.searchTerm,
        page,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default create;
