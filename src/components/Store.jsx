import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useStore = create(
  persist(
    (set, get) => ({
      animeList: [],
      addAnime: (anime) =>
        set((state) => ({ animeList: [...state.animeList, anime] })),
      sorting: (sort, key) => {
        const sortAnime = get().animeList.sort((a, b) =>
          sort === "asc" ? a[key] - b[key] : b[key] - a[key]
        )
        set({ animeList: sortAnime })
      },
    }),

    {
      name: "animeTrailers",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
