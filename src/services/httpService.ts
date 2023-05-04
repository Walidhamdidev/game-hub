import apiClient from "./api-client";
import { Platform } from "./gameService";
import { Genre } from "./genreService";

class HttpService<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(seletedGenre?: Genre | null, selectedPlatform?: Platform | null) {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      params: {
        genres: seletedGenre?.id,
        platforms: selectedPlatform?.id,
      },
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default create;
