import { storage } from './firebase-config'
import {
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'

export const uploadPdfToStorage = async (formData) => {
  console.log(formData)
  const fileName = `bijed-vol-${formData.volume}(${formData.issue})-pg${formData.startPage}-${formData.endPage}.pdf`
  const articlesRef = ref(storage, `articles/${fileName}`)
  console.log(fileName)
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
  const data = await uploadBytes(articlesRef, formData.pdfFile, {
    contentDisposition: `attachment; filename=${fileName}`,
  })
  const url = await getDownloadURL(data.ref)
  console.log(url)
  return url
}

export const removePdfFromStorage = async (fileUrl) => {
  try {
    const articleRef = ref(storage, fileUrl)
    const exisitingFile = await getDownloadURL(articleRef)
    if (exisitingFile) {
      console.log(exisitingFile)
      await deleteObject(articleRef)
      const deletedFile = await getDownloadURL(articleRef)
      console.log(deletedFile)
      return
    }
  } catch (error) {
    console.log(error)
  }
}
