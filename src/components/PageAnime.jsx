import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const PageAnime = () => {
  const { id } = useParams()
  const url = `https://api.jikan.moe/v4/anime/${id}/full`
  const [info, setInfo] = useState({})
  const getInfo = async () => {
    const response = await fetch(url).then((response) => response.json())
    setInfo(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    getInfo()
  }, [])
  const isEpmtyObj = Object.entries(info).length > 0
  return (
    <>
      {isEpmtyObj ? (
        <section className="page__info">
          <img
            src={info.images.jpg.large_image_url}
            alt="обложка"
            width={"600px"}
          />
          <section className="anime__info">
            <h1>{info.title}</h1>
            <div className="titles">
              <h4>Alternative titles</h4>
              <ul>
                {info.titles.map((el, index) => {
                  return (
                    <li key={index}>
                      {el.type} : {el.title}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="genres">
              <h4>Genres</h4>
              <ul>
                {info.genres.map((el, index) => {
                  return <li key={index}>{el.name}</li>
                })}
              </ul>
            </div>
            <div className="studios">
              <h4>Studios</h4>
              <ul>
                {info.studios.map((el, index) => {
                  return <li key={index}>{el.name}</li>
                })}
              </ul>
            </div>
            <div className="themes">
              <h4>Themes</h4>
              <ul>
                {info.themes.map((el, index) => {
                  return <li key={index}>{el.name}</li>
                })}
              </ul>
            </div>
            <div className="producers">
              <h4>Produsers</h4>
              <ul>
                {info.producers.map((el, index) => {
                  return <li key={index}>{el.name}</li>
                })}
              </ul>
            </div>
            <h4>Information</h4>
            <ul>
              <li>
                Rating: <span>{info.rating}</span>
              </li>
              <li>
                Duration: <span>{info.duration}</span>
              </li>
              <li>
                Episodes: <span>{info.episodes}</span>
              </li>
              <li>
                Aired: <span>{info.aired.string}</span>
              </li>
              <li>
                Score: <span>{info.score}</span>
              </li>
              <li>
                Scored by: <span>{info.scored_by}</span>
              </li>
              <li>
                Favorites: <span>{info.favorites}</span>
              </li>
            </ul>
          </section>
          <div>
            <h4>Synopsis</h4>
            <p>{info.synopsis}</p>
          </div>
        </section>
      ) : (
        <span>загрузка</span>
      )}
    </>
  )
}

export default PageAnime
