export const formatDate = (date) => {
  // const formatter = new Intl.DateTimeFormat('en-US')

  // @benchmark regexp
  // return formatter.format(date).replace(/[\/,]+/g, '-')
  const year = new Date(date).getFullYear()
  const month = new Date(date).getMonth()
  const day = new Date(date).getDate()
  return `${day}-${month + 1}-${year}`
}
