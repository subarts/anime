const FilterSingleChoice = ({ select, filter }) => {
  const filterElement = Object.entries(filter)[0][0]
  const arrayFilters = Object.entries(filter)[0][1]
  return (
    <>
      <label htmlFor={filter.nameAndID}>{filter.text}</label>
      <select
        name={filter.nameAndID}
        id={filter.nameAndID}
        onChange={(e) => select(e.target.value, filterElement)}
      >
        <option key="-1" value="">
          Select
        </option>
        {arrayFilters.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default FilterSingleChoice
