import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchTerm?: string;
}

interface gameQueryStore {
  gameQuery: GameQuery;
  onSearchTerm: (searchTerm: string) => void;
  onSelectedGenre: (genreId: number) => void;
  onSelectedPlatform: (platformId: number) => void;
  onSelectedSort: (sort: string) => void;
}

const useGameQueryStore = create<gameQueryStore>((set) => ({
  gameQuery: {},
  onSearchTerm: (searchTerm) => set(() => ({ gameQuery: { searchTerm } })),
  onSelectedGenre: (genreId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, genreId },
    })),

  onSelectedPlatform: (platformId) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, platformId },
    })),

  onSelectedSort: (sort) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sort },
    })),
}));

export default useGameQueryStore;
