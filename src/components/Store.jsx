import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

const useStore = create(
  persist(
    (set, get) => ({
      animeList: [],
      addAnime: (anime) =>
        set((state) => ({ animeList: [...state.animeList, anime] })),
    }),
    {
      name: "animeTrailers",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
export { useStore }
