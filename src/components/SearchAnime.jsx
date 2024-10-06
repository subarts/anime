const SearchAnime = ({ searchAnime }) => {
  function a(e) {
    e.preventDefault()
    searchAnime(e.target[0].value)
  }

  return (
    <form action="" onSubmit={a}>
      <input type="text" placeholder="Search anime"></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchAnime
