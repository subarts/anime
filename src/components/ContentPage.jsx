const ContentPage = (info) => {
  return (
    <>
      <img src={info.trailer.images.large_image_url} alt="" />
      <section>
        <ul className="titles">
          <li>Название:{info.title_english}</li>
          <li>Оригинально название: {info.title_japanese}</li>
        </ul>
        <p>Возрастной рейтинг: {info.rating}</p>
        <ul className="genres">
          <span>Жанры:</span>
          {info.genres.map((el, index) => {
            return <li key={index}>{el.name}</li>
          })}
        </ul>
        <ul>
          Студии:
          {info.studios.map((el, index) => {
            return <li key={index}>{el.name}</li>
          })}
        </ul>
        <p>Длительность: {info.duration}</p>
        <p>Количество эпизодов: {info.episodes}</p>
        <p>Выходило с {info.aired.string}</p>
        <p>Оценка: {info.score}</p>
        <p>Количество оценивших:{info.scored_by}</p>
        <p>В избраном у {info.favorites}</p>
        <p>
          Описание:
          {info.synopsis}
        </p>
      </section>
    </>
  )
}

export default ContentPage
