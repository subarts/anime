import { Link } from "react-router-dom"
import PageAnime from "./PageAnime"
const ListAnime = ({ anime }) => {
  return (
    <div className="anime__list">
      {anime.map((el, index) => {
        return (
          <Link
            to={el.mal_id.toString()}
            element={<PageAnime />}
            key={index}
            className="anime__item"
          >
            <img
              src={el.images.jpg.large_image_url}
              alt={el.title}
              width={"200px"}
            />
            <ul>
              <li>
                <h3>{el.title}</h3>
              </li>
              <li>ID:{el.mal_id}</li>
              <li>rank:{el.rank}</li>
              <li>score:{el.score}</li>
              <li>scored by:{el.scored_by}</li>
              <li>year:{el.year}</li>
            </ul>
          </Link>
        )
      })}
    </div>
  )
}

export default ListAnime
