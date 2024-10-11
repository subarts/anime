const Period = ({ selectStartDate, selectEndDate }) => {
  return (
    <div className="filters__date">
      <label htmlFor="start__date">Select start date</label>
      <input
        type="date"
        id="start__date"
        onChange={(e) => selectStartDate(e.target.value)}
      />

      <label htmlFor="end__date">Select end date</label>
      <input
        type="date"
        id="end__date"
        onChange={(e) => selectEndDate(e.target.value)}
      />
    </div>
  )
}

export default Period
