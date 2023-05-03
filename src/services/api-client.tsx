import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "100f85ddca2f4f598b0d091630757ae4",
  },
});

export default apiClient;
