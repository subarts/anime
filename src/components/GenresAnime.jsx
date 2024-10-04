import { useEffect, useState } from "react"

const GenresAnime = () => {
  const [genres, setGenres] = useState([])
  const [checked, setChecked] = useState([])
  /* запрос жанров */
  const url = "https://api.jikan.moe/v4/genres/anime"
  const getGenresAnime = async () => {
    const response = await fetch(url).then((response) => response.json())

    setGenres(response.data)
  }
  useEffect(() => {
    setTimeout(() => getGenresAnime(), 3000)
  }, [])
  return (
    <fieldset>
      <legend>Genres</legend>
      {genres.map((el, index) => {
        return (
          <label key={index} className="genres__checkbox">
            <input
              className="genres__input"
              type="checkbox"
              id={el.name}
              value={el.name}
              onChange={(e) =>
                e.target.checked
                  ? setChecked([...checked, e.target.value])
                  : setChecked(checked.filter((el) => el !== e.target.value))
              }
            />
            {el.name}
          </label>
        )
      })}
    </fieldset>
  )
}

export default GenresAnime
