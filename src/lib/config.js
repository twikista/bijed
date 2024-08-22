export const config = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_URL
      : process.env.NEXT_BASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
}
