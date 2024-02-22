import { storage } from './firebase-config'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'

export const uploadPdf = async (file, fileName) => {
  const articlesRef = ref(storage, `articles/${fileName}`)
  // uploadBytes(articlesRef, file).then((data) => {
  //   getDownloadURL(data.ref).then((url) => {
  //     uploadedPdfUrl = url
  //     console.log(url)
  //     return url
  //   })
  // })
  // console.log(uploadedPdfUrl)
  // return uploadedPdfUrl
  // const metadata = { contentType: 'application/pdf' }
  const data = await uploadBytes(articlesRef, file)
  const url = await getDownloadURL(data.ref)
  console.log(url)
  return url
}
