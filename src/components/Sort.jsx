const Sort = ({ selectedSort, orderSort }) => {
  const obj = {
    mal_id: "айдишник",
    score: "оценке",
    scored_by: "количеству оценок",
    favorites: "количеству favorites",
    episodes: "количеству эпизодов",
    start_date: "по начальной дате",
    end_date: "по конечной дате",
  }
  return (
    <div className="sort">
      <label htmlFor="selected__sort">Сортировка по </label>
      <select
        id="selected__sort"
        name="sorting"
        defaultValue={"popularity"}
        onChange={(e) => orderSort(e.target.value)}
      >
        <option value="popularity">популярности</option>

        {Object.entries(obj).map((el, index) => {
          return (
            <option key={index} value={el[0]}>
              {el[1]}
            </option>
          )
        })}
      </select>
      <select
        defaultValue={"asc"}
        name="selected"
        id="selected__secondSort"
        onChange={(e) => {
          selectedSort(e.target.value)
        }}
      >
        <option value="desc">по убываванию</option>
        <option value="asc">по возрастанию</option>
      </select>
    </div>
  )
}

export default Sort
