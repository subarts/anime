import { useStore } from "./Store"

const WatchLater = () => {
  const anime = useStore((state) => state.animeList)

  return (
    <div>
      {anime.map((el, index) => {
        return (
          <div key={index}>
            <iframe src={el.trailer.embed_url}></iframe>
            <div>{el.title}</div>
            <div>{el.date}</div>
          </div>
        )
      })}
    </div>
  )
}

export default WatchLater
