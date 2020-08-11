export default (formName, formErrors) => {
  let res = []
  const entries = Object.entries(formErrors)
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][0] === formName) {
      res.push({
        message: entries[i][1],
        border: '2px solid #ed5107'
      })
    }
  }
  if (!res.length) return null
  return res[0]
}
