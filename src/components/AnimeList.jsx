import { useState, useEffect } from "react"

const GeatAnimeAll = () => {
  const url = "https://api.jikan.moe/v4/anime"
  const [anime, setAnime] = useState([])
  const getApiData = async () => {
    const response = await fetch(url).then((response) => response.json())
    setAnime(response.data)
  }
  useEffect(() => {
    getApiData()
  }, [])
  return <></>
}

export default GeatAnimeAll

const option = {
  page: 1,
  limit: 2,
  score: 3,
  min_score: 4,
  max_score: 5,
  status: ["airing", "complete", "upcoming"],
  rating: ["g", "pg", "pg13", "r17", "r", "rx"],
  genres: [""],
  genres_exclude: [""],
  order_by: [
    "mal_id",
    "title",
    "start_date",
    "end_date",
    "episodes",
    "score",
    "scored_by",
    "rank",
    "popularity",
    "members",
    "favorites",
  ],
  sort: ["desc", "asc"],
  producers: "",
  start_date: "yyyy-mm-dd",
  end_date: "yyyy-mm-dd",
}
