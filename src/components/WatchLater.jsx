import { useState } from "react"
import { useStore } from "./Store"
const WatchLater = () => {
  const anime = useStore((state) => state.animeList)
  const { sorting } = useStore((state) => state)
  function changeSort(sort, key) {
    sorting(sort, key)
  }
  return (
    <div className="watchLater__list">
      <label htmlFor="selected__expectation"> sort by expectation</label>
      <select
        defaultValue="asc"
        name="selected"
        id="selected__expectation"
        onChange={(e) => {
          changeSort(e.target.value, "expectation")
        }}
      >
        <option value="desc">decrease</option>
        <option value="asc">ascending</option>
      </select>
      <label htmlFor="selected__date"> sort by date</label>
      <select
        defaultValue={"asc"}
        name="selected"
        id="selected__date"
        onChange={(e) => {
          changeSort(e.target.value, "milliseconds")
        }}
      >
        <option value="desc">decrease</option>
        <option value="asc">ascending</option>
      </select>
      {anime.map((el, index) => {
        return (
          <div key={index}>
            <h3>{el.title}</h3>
            <p>дата добавления:{el.date}</p>
            <p>ожидания:{el.expectation}</p>
            <iframe src={el.trailer_url}></iframe>
          </div>
        )
      })}
    </div>
  )
}

export default WatchLater
