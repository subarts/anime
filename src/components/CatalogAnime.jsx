import { useState, useEffect } from "react"
import Sort from "./Sort"
import Filter from "./Filter"
import { Link } from "react-router-dom"

const CatalogAnime = () => {
  const url = "https://api.jikan.moe/v4/anime?"

  const [anime, setAnime] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("asc")
  const [order, setOrder] = useState("popularity")
  const [producers, setproducers] = useState([])
  const searchParams = new URLSearchParams("")
  searchParams.append("order_by", order)
  searchParams.append("sort", sort)

  const getAnimeList = async () => {
    const response = await fetch(url + searchParams).then((response) =>
      response.json()
    )
    console.log(response.data)
    console.log(url + searchParams)
    setAnime(response.data)
    setPagination(response.pagination)
    setPage(response.pagination.current_page)
  }
  useEffect(() => {
    setTimeout(() => {
      getAnimeList()
    }, 1000)
  }, [sort, order, producers])
  /* переключение страниц */
  function nextPage() {
    if (page < pagination.last_visible_page) {
      searchParams.append("page", page + 1)
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
  /* получение сортировок с sort.jsx */
  function selectedSort(select) {
    setSort(select)
  }
  function orderSort(order) {
    setOrder(order)
  }
  /* получение с producers */
  function addproducersFilter(newproducers, bool) {
    bool
      ? setproducers([...producers, newproducers])
      : setproducers(producers.filter((el) => el !== newproducers))
  }
  searchParams.append("producers", producers)
  return (
    <>
      <Filter addproducersFilter={addproducersFilter} />
      <Sort selectedSort={selectedSort} orderSort={orderSort} />

      <div className="anime__list">
        <p>
          страница: {pagination.current_page} из
          {pagination.last_visible_page}
        </p>
        <button onClick={prevPage}>преведущая</button>
        <button onClick={nextPage}>следующая</button>
        {anime.map((el, index) => {
          return (
            <div key={index} className="anime__item">
              <img
                src={`${el.images.jpg.small_image_url}`}
                alt={`${el.title}`}
                width={"54px"}
              />
              <ul>
                {el.producers.map((el) => {
                  return <li key={el.name}>{el.name}</li>
                })}
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
