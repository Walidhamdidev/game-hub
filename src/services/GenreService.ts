import create from "./httpService";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface ResponseGenre {
  count: number;
  results: Genre[];
}

export default create<ResponseGenre>("/genres");
