import GenresAnime from "./GenresAnime"
import FilterSingleChoice from "./Filters/FilterSingleChoice"
import Period from "./Filters/Period"
import ProducersAnime from "./ProducersAnime"

const Filter = ({
  addproducersFilter,
  select,
  selectStartDate,
  selectEndDate,
}) => {
  const listOfFilters = [
    {
      status: ["airing", "complete", "upcoming"],
      text: "By status",
      nameAndID: "selectedStatus",
    },
    {
      rating: ["g", "pg", "pg13", "r17", "r", "rx"],
      text: "By rating",
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
      text: "Type by",
      nameAndID: "selectedType",
    },
  ]

  return (
    <div className="filters__list">
      <fieldset className="filters__item">
        <legend>Filter by </legend>
        {listOfFilters.map((el, index) => {
          return <FilterSingleChoice filter={el} select={select} key={index} />
        })}
        <Period
          selectStartDate={selectStartDate}
          selectEndDate={selectEndDate}
        />
      </fieldset>

      <GenresAnime />

      <ProducersAnime addproducersFilter={addproducersFilter} />
    </div>
  )
}

export default Filter
