import { articleFileName } from '../util'
import { storage } from './firebase-config'
import {
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage'

export const uploadPdfToStorage = async (formData) => {
  console.log('formData-', formData)
  const fileName = articleFileName(formData)
  const articlesRef = ref(storage, `articles/${fileName}`)
  console.log(fileName)

  // const data = await uploadBytes(articlesRef, formData.pdfFile[0], {
  //   contentDisposition: `attachment; filename=${fileName}`,
  // })
  const data = await uploadBytes(articlesRef, formData.pdfFile[0])
  console.log('firebase-', data)
  const url = await getDownloadURL(data.ref)
  console.log(url)
  return url
}

export const removePdfFromStorage = async (fileUrl) => {
  console.log('fileUrl-', fileUrl)
  try {
    const articleRef = ref(storage, fileUrl)

    const exisitingFile = await getDownloadURL(articleRef)
    console.log('exisitingFile-', exisitingFile)
    if (exisitingFile) {
      console.log('bling', articleRef)
      const del = await deleteObject(articleRef)
      const deletedFile = await getDownloadURL(articleRef)
      console.log('deletefile-', deletedFile)
      console.log('del-', del)
      return
    }
  } catch (error) {
    console.log(error)
  }
}
