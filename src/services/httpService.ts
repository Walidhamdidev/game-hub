import apiClient from "./api-client";

class HttpService<T> {
  private endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint);

export default create;
