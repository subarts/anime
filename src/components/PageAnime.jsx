import { useEffect, useState } from "react"

const PageAnime = () => {
  /* картинки, трейлер если есть, оригинальный заголовок,
 переведенный заголовок, даты, рейтинг, оценка, кол-во оценок
  и favotrites, продюсер, жанры, темы, связанное */

  const url = `https://api.jikan.moe/v4/anime/1/full`
  const [info, setInfo] = useState({})
  const getInfo = async () => {
    const response = await fetch(url).then((response) => response.json())
    setInfo(response.data)
  }
  useEffect(() => {
    getInfo()
  }, [])
  const isEpmtyObj = Object.entries(info).length > 0
  console.log(info)
  return (
    <>
      {isEpmtyObj ? (
        <section className="page_info">
          <img
            src={info.images.jpg.large_image_url}
            alt="обложка"
            width={"300px"}
          />
          <section>
            <ul className="titles">
              <li>{info.title}</li>
              <li>japanese title: {info.title_japanese}</li>
            </ul>
            <p>Rating: {info.rating}</p>
            <h4>Genres:</h4>
            <ul className="genres">
              {info.genres.map((el, index) => {
                return <li key={index}>{el.name}</li>
              })}
            </ul>
            <h4>Studios:</h4>
            <ul>
              {info.studios.map((el, index) => {
                return <li key={index}>{el.name}</li>
              })}
            </ul>
            <p>Duration:</p> <span>{info.duration}</span>
            <p>Episodes: {info.episodes}</p>
            <p>Aired:{info.aired.string}</p>
            <p>Score: {info.score}</p>
            <p>Scored by:{info.scored_by}</p>
            <p>Favorites: {info.favorites}</p>
            Themes:
            <ul>
              {info.themes.map((el, index) => {
                return <li key={index}>{el.name}</li>
              })}
            </ul>
            <ul>
              Produsers:
              {info.producers.map((el, index) => {
                return <li key={index}>{el.name}</li>
              })}
            </ul>
          </section>
          <p>
            Synopsis:
            {info.synopsis}
          </p>
        </section>
      ) : (
        <span>загрузка</span>
      )}
    </>
  )
}

export default PageAnime
