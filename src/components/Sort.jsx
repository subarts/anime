const Sort = ({ selectedSort }) => {
  return (
    <>
      <label htmlFor="selected__sort">Сортировка по </label>
      <select id="selected__sort" name="sorting">
        <option value="popularity" defaultValue>
          популярности
        </option>
        <option value="score">оценке</option>
        <option value="scored_by"> количеству оценок</option>
        <option value="favorites">количеству favorites</option>
        <option value="episodes">количеству эпизодов</option>
        <option value="aired_start">по начальной дате</option>
        <option value="aired_end">по конечной дате</option>
      </select>
      <select
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
