import GenresAnime from "./GenresAnime"
import { useState } from "react"
import FilterSingleChoice from "./Filters/FilterSingleChoice"
import Period from "./Filters/Period"
import ProducersAnime from "./ProducersAnime"

const Filter = ({ addproducersFilter }) => {
  /* типу, рейтингу, статусу (единственное число - один вариант выбора),
   периоду времени, жанрам (можно выбрать несколько), исключенные жанры (можно выбрать несколько), 
   продюсерам (можно выбрать несколько)
все фильтры можно применить одновременно */
  const [filters, setFilters] = useState({
    type: "",
    rating: "",
    status: "",
    start_date: "",
    end_date: "",
    genres: [],
    genres_exclude: [],
    producers: [],
  })
  const listOfFilters = [
    {
      status: ["airing", "complete", "upcoming"],
      text: "По статусу",
      nameAndID: "selectedStatus",
    },
    {
      rating: ["g", "pg", "pg13", "r17", "r", "rx"],
      text: "По рейтингу",
      nameAndID: "selectedRating",
    },
    {
      type: [
        "tv",
        "movie",
        "ova",
        "special",
        "ona",
        "music",
        "cm",
        "pv",
        "tv_special",
      ],
      text: "По типу",
      nameAndID: "selectedType",
    },
  ]
  function select(status, filterElement) {
    setFilters({ ...filters, [filterElement]: status })
  }

  function selectStartDate(start) {
    setFilters({ ...filters, start_date: start })
  }
  function selectEndDate(end) {
    setFilters({ ...filters, end_date: end })
  }
  return (
    <>
      <label htmlFor="selected__filter">Отфильтровать по </label>
      <div id="selected__filter">
        {listOfFilters.map((el, index) => {
          return <FilterSingleChoice filter={el} select={select} key={index} />
        })}
        <Period
          selectStartDate={selectStartDate}
          selectEndDate={selectEndDate}
        />
      </div>

      <GenresAnime />

      <ProducersAnime addproducersFilter={addproducersFilter} />
    </>
  )
}

export default Filter
