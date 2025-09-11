export const config = {
  baseUrl:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_URL
      : process.env.NEXT_BASE_URL,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  sitekey: process.env.NEXT_PUBLIC_DEV_SITE_KEY,
  secretKey:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_DEV_SECRET_KEY
      : process.env.SECRET_KEY,
  r2: {
    bucketName:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_R2_BUCKET_NAME
        : process.env.R2_BUCKET_NAME,
    publicUrl:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_R2_PUBLIC_URL
        : process.env.R2_PUBLIC_URL,
  },
  mongoURI:
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_MONGO_URI
      : process.env.MONGO_URI,
};
