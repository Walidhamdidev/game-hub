import create from "./httpService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface ResponsePlatform {
  count: number;
  results: Platform[];
}

export default create<ResponsePlatform>("/platforms/lists/parents");
