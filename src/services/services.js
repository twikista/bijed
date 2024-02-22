export const uploadArticle = async (data) => {
  const res = await fetch('http://localhost:3000/api/articles', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  const x = await res.json()
}
