const futureDate = (days = 10) => {
  const miliseconds = days * 24 * 60 * 60 * 1000
  const date = new Date().setMilliseconds(miliseconds)
  const year = new Date(date).getFullYear()
  const month = Number(new Date(date).getMonth() + 1)
  const day = new Date(date).getDate()
  return `${year}-${month}-${day}`
}

module.exports = {futureDate}
