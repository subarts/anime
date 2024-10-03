import { useEffect, useState } from "react"

const GetGenresAnime = () => {
  const [genres, setGenres] = useState([])
  /* запрос жанров */
  const url = "https://api.jikan.moe/v4/genres/anime"
  const getGenresAnime = async () => {
    const response = await fetch(url)
      .then((response) => response.json())
      .catch((e) => console.log(e))
    setGenres(response.data)
  }

  useEffect(() => {
    getGenresAnime()
  }, [])

  return (
    <ul className="genres__List">
      {genres.map((el, index) => {
        return (
          <li key={index} className="genres__item">
            {el.name}
          </li>
        )
      })}
    </ul>
  )
}

export default GetGenresAnime
