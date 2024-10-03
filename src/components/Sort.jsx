const Sort = ({ selectedSort, orderSort }) => {
  return (
    <>
      <label htmlFor="selected__sort">Сортировка по </label>
      <select
        id="selected__sort"
        name="sorting"
        defaultValue={"popularity"}
        onChange={(e) => orderSort(e.target.value)}
      >
        <option value="popularity" defaultValue>
          популярности
        </option>
        <option value="mal_id">айдишник</option>
        <option value="score">оценке</option>
        <option value="scored_by"> количеству оценок</option>
        <option value="favorites">количеству favorites</option>
        <option value="episodes">количеству эпизодов</option>
        <option value="start_date">по начальной дате</option>
        <option value="end_date">по конечной дате</option>
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
    </>
  )
}

export default Sort
