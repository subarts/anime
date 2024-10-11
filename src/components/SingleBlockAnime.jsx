const SingleBlockAnime = ({ titleBlock, info }) => {
  return (
    <div className={titleBlock.toLowerCase()}>
      <h4>{titleBlock}</h4>
      <ul>
        {info.map((el, index) => {
          return <li key={index}>{el.name}</li>
        })}
      </ul>
    </div>
  )
}

export default SingleBlockAnime
