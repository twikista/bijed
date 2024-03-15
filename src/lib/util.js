import bcrypt, { hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const formatDate = (date) => {
  const year = new Date(date).getFullYear()
  const month = new Date(date).getMonth()
  const day = new Date(date).getDate()
  return `${day}-${month + 1}-${year}`
}

export const joinKeywords = (arr) => {
  return arr.join(', ')
}

export const articleFileName = (articleObject) =>
  `bijed-vol-${articleObject.volume}(${articleObject.issue})-pg${articleObject.startPage}-${articleObject.endPage}.pdf`

export const hashPassword = async (password) => {
  console.log(password)
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}

export const validatePassword = async (password, hashedPassword) => {
  const isValid = await bcrypt.compare(password, hashedPassword)
  console.log('isvalid: ', isValid)
  return isValid
}

export const signJWT = (payload, option = { expiresIn: '1d' }) => {
  const secretKey = process.env.JWT_SECRET_KEY
  const signedToken = jwt.sign(payload, secretKey, option)
  return signedToken
}

export const verifyJWT = (token) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY
    const verifiedToken = jwt.verify(token, secretKey)
    return verifiedToken
  } catch (error) {
    console.log(error)
    return null
  }
}
