export default (key, value) => {
  const clearKey = key.slice(1)
  if (clearKey === value) {
    return {
      borderRight: '3px solid var(--color-primary)',
      backgroundColor: 'var(--color-primary-light)'
    }
  }
}
