import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useStore } from "./Store/Store"
import SingleBlockAnime from "./SingleBlockAnime"
import InformationBlockAnime from "./InformationBlockAnime"

const PageAnime = () => {
  const { id } = useParams()
  const url = `https://api.jikan.moe/v4/anime/${id}/full`
  const [info, setInfo] = useState({})
  const [expectation, setExpectation] = useState(1)
  const getInfo = async () => {
    const response = await fetch(url).then((response) => response.json())
    setInfo(response.data)
  }
  useEffect(() => {
    getInfo()
  }, [])
  const isEpmtyObj = Object.entries(info).length > 0
  /* zustand */
  const { addAnime } = useStore((state) => state)
  const buttonClick = () => {
    const date = new Date()
    const milliseconds = Date.now()
    const newObjAnime = {
      trailer_url: info.trailer.embed_url,
      date: date.toLocaleDateString(),
      milliseconds: milliseconds,
      expectation: expectation,
      title: info.title,
    }
    addAnime(newObjAnime)
  }

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
            <SingleBlockAnime titleBlock={"Genres"} info={info.genres} />
            <SingleBlockAnime titleBlock={"Studios"} info={info.studios} />
            <SingleBlockAnime titleBlock={"Themes"} info={info.themes} />
            <SingleBlockAnime titleBlock={"Producers"} info={info.producers} />
            <InformationBlockAnime info={info} />
          </section>
          <div>
            <h4>Synopsis</h4>
            <p>{info.synopsis}</p>
          </div>
          {info.trailer.embed_url !== null ? (
            <>
              <iframe
                src={info.trailer.embed_url}
                onError={(e) =>
                  console.error("Ошибка воспроизведения видео:", e)
                }
              ></iframe>
              <label htmlFor="expectationInput">expectation (1-10)</label>

              <input
                className="expectation__input"
                id="expectationInput"
                type="number"
                min={1}
                max={10}
                defaultValue={"1"}
                onChange={(e) => setExpectation(e.target.value)}
              />
              <button onClick={buttonClick} className="watch__later_button">
                смотреть позже
              </button>
            </>
          ) : (
            ""
          )}
        </section>
      ) : (
        <span>загрузка</span>
      )}
    </>
  )
}

export default PageAnime
