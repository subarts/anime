import { useEffect, useState } from "react"

const ProducersAnime = ({ addproducersFilter }) => {
  const [producers, setproducers] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const searchParams = new URLSearchParams("")
  const url = "https://api.jikan.moe/v4/producers?"
  const getproducers = async () => {
    const response = await fetch(url + searchParams).then((response) =>
      response.json()
    )
    setproducers(response.data)
    setPagination(response.pagination)
    setPage(response.pagination.current_page)
  }
  useEffect(() => {
    setTimeout(() => getproducers(), 4000)
  }, [])
  function nextPage() {
    if (page < pagination.last_visible_page) {
      searchParams.append("page", page + 1)
      getproducers()
    }
    return
  }
  function prevPage() {
    if (page >= 2) {
      searchParams.append("page", page - 1)
      getproducers()
    }
    return
  }

  return (
    <fieldset className="producers__list">
      <legend>Producers</legend>
      {producers.map((el) => {
        return (
          <label key={el.titles[0].title} className="producers__checkbox">
            <input
              className="producers__input"
              type="checkbox"
              id={el.titles[0].title}
              value={el.mal_id}
              onChange={(e) =>
                e.target.checked
                  ? addproducersFilter(e.target.value, true)
                  : addproducersFilter(e.target.value, false)
              }
            />
            {el.titles[0].title}
          </label>
        )
      })}
      <p>
        page: {pagination.current_page} from
        {pagination.last_visible_page}
      </p>
      <div className="producers__button_list">
        <button onClick={prevPage} className="producers__button">
          prev page
        </button>
        <button onClick={nextPage} className="producers__button">
          next page
        </button>
      </div>
    </fieldset>
  )
}

export default ProducersAnime
