const InformationBlockAnime = ({ info }) => {
  return (
    <>
      <h4>Information</h4>
      <ul>
        <li>
          Rank: <span>{info.rank}</span>
        </li>
        <li>
          Popularity: <span>{info.popularity}</span>
        </li>
        <li>
          Rating: <span>{info.rating}</span>
        </li>
        <li>
          Duration: <span>{info.duration}</span>
        </li>
        <li>
          Episodes: <span>{info.episodes}</span>
        </li>
        <li>
          Aired: <span>{info.aired.string}</span>
        </li>
        <li>
          Score: <span>{info.score}</span>
        </li>
        <li>
          Scored by: <span>{info.scored_by}</span>
        </li>
        <li>
          Favorites: <span>{info.favorites}</span>
        </li>
      </ul>
    </>
  )
}

export default InformationBlockAnime
