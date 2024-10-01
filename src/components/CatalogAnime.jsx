import { useState, useEffect } from "react"
import Sort from "./Sort"
const CatalogAnime = () => {
  const url = "https://api.jikan.moe/v4/anime?"

  const [anime, setAnime] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("desc")
  const searchParams = new URLSearchParams("order_by=popularity")

  /*   searchParams.append("published", "1952")
  searchParams.set("author", "Orwell") */
  /*   searchParams.delete("published") */
  /*   searchParams.append("orger_by", "popularity")
   */
  searchParams.append("sort", sort)
  const getAnimeList = async () => {
    console.log(url + searchParams)
    const response = await fetch(url + searchParams).then((response) =>
      response.json()
    )
    setAnime(response.data)
    setPagination(response.pagination)
    setPage(response.pagination.current_page)
  }
  useEffect(() => {
    getAnimeList()
  }, [sort])
  /* переключение страниц */
  function nextPage() {
    if (page) {
      searchParams.append("page", page + 1)
      /* легально ли так делоть с пейдж? */
      getAnimeList()
    }
    return
  }

  function prevPage() {
    if (page >= 2) {
      searchParams.append("page", page - 1)
      getAnimeList()
    }
    return
  }
  /* gjkexty */
  function selectedSort(select) {
    setSort(select)
  }
  return (
    <>
      <Sort selectedSort={selectedSort} />

      <div className="anime__list">
        <p>
          страница: {pagination.current_page} из
          {pagination.last_visible_page}
        </p>
        <button onClick={prevPage}>преведущая</button>
        <button onClick={nextPage}>следующая</button>
        {anime.map((el) => {
          return (
            <div key={el.mal_id} className="anime__item">
              <img
                src={`${el.images.jpg.small_image_url}`}
                alt={`${el.title}`}
                width={"54px"}
              />
              <ul>
                <li>{el.mal_id}</li>
                <li>{el.title}</li>
                <li>Ранг:{el.rank}</li>
                <li>Оценка:{el.score}</li>
                <li>Оценившие:{el.scored_by}</li>
                <li>Статус:{el.status}</li>
                <li>Год выхода:{el.year}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default CatalogAnime
