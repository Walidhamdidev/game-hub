import apiClient from "./api-client";

export interface Genre {
  id: number;
  name: string;
}

interface ResponseGenre {
  count: number;
  results: Genre[];
}

class GenreService {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllGenres() {
    const controller = new AbortController();
    const request = apiClient.get<ResponseGenre>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

export default new GenreService("/genres");
