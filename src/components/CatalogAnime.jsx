import { useState, useEffect } from "react"
import Sort from "./Sort"
import Filters from "./Filters"
import SearchAnime from "./SearchAnime"
import ListAnime from "./ListAnime"
const CatalogAnime = () => {
  const url = "https://api.jikan.moe/v4/anime?"

  const [anime, setAnime] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("asc")
  const [order, setOrder] = useState("popularity")
  const [filters, setFilters] = useState({
    type: "",
    rating: "",
    status: "",
    start_date: "",
    end_date: "",
    genres: [],
    genres_exclude: [],
    producers: [],
    limit: 24,
    q: "",
  })
  const searchParams = new URLSearchParams("")
  searchParams.append("order_by", order)
  searchParams.append("sort", sort)
  /* добавление фильтров в url */
  for (let f in filters) {
    searchParams.append(f, filters[f])
  }

  const getAnimeList = async () => {
    const response = await fetch(url + searchParams).then((response) =>
      response.json()
    )
    setAnime(response.data)
    setPagination(response.pagination)
    setPage(response.pagination.current_page)
  }
  useEffect(() => {
    setTimeout(() => {
      getAnimeList()
    }, 1000)
  }, [sort, order, filters])
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
  /* получение сортировок с sort */
  function selectedSort(select) {
    setSort(select)
  }
  function orderSort(order) {
    setOrder(order)
  }
  /* получение  с producers */
  function addproducersFilter(newproducers, bool) {
    bool
      ? setFilters({
          ...filters,
          producers: [...filters.producers, newproducers],
        })
      : setFilters({
          ...filters,
          producers: filters.producers.filter((el) => el !== newproducers),
        })
  }

  /* получение с filters  */
  function select(status, filterElement) {
    setFilters({ ...filters, [filterElement]: status })
  }

  function selectStartDate(start) {
    setFilters({ ...filters, start_date: start })
  }
  function selectEndDate(end) {
    setFilters({ ...filters, end_date: end })
  }
  /* получение с searchAnime,поиск */
  function searchAnime(search) {
    setFilters({ ...filters, q: search })
  }

  return (
    <>
      <Filters
        addproducersFilter={addproducersFilter}
        select={select}
        selectStartDate={selectStartDate}
        selectEndDate={selectEndDate}
      />
      <SearchAnime searchAnime={searchAnime} />
      <Sort selectedSort={selectedSort} orderSort={orderSort} />
      <ListAnime anime={anime} />
      <div className="buttons__anime">
        <button onClick={prevPage}>prev page</button>
        <p>
          page: {pagination.current_page} from
          {pagination.last_visible_page}
        </p>
        <button onClick={nextPage}>next page</button>
      </div>
    </>
  )
}

export default CatalogAnime
