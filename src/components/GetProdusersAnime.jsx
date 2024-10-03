import { useEffect, useState } from "react"

const GetProdusersAnime = () => {
  const [produsers, setProdusers] = useState([])

  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState(1)
  const searchParams = new URLSearchParams("")
  const url = "https://api.jikan.moe/v4/producers?"
  const GetProdusers = async () => {
    const response = await fetch(url + searchParams).then((response) =>
      response.json()
    )
    setProdusers(response.data)
    setPagination(response.pagination)
    setPage(response.pagination.current_page)
  }

  useEffect(() => {
    GetProdusers()
  }, [])
  function nextPage() {
    if (page < pagination.last_visible_page) {
      searchParams.append("page", page + 1)
      GetProdusers()
    }
    return
  }
  function prevPage() {
    if (page >= 2) {
      searchParams.append("page", page - 1)
      GetProdusers()
    }
    return
  }

  return (
    <>
      <button onClick={prevPage}>преведущая</button>
      <button onClick={nextPage}>следующая</button>
      <p>
        страница: {pagination.current_page} из
        {pagination.last_visible_page}
      </p>
      <ul className="produsers__list">
        {produsers.map((el, index) => {
          return (
            <li key={index} className="produsers__item">
              {el.titles[0].title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default GetProdusersAnime
