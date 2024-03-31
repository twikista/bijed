import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUser } from '@/lib/data'
import { validatePassword } from './src/lib/util'
import { authConfig } from './auth.config'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          console.log(credentials)
          console.log('ran')
          connectDB()
          //use getuser function
          const user = await getUser(credentials.email)

          const parsedUser = JSON.parse(JSON.stringify(user))
          console.log('from authorize function')
          console.log(parsedUser)
          console.log('user from authorize :', user)

          // if (!user) throw new Error('Incorrect email or password')
          console.log('user exist', !user)
          if (!user) {
            console.log('Invalid credentials')
            throw new Error('invalid credentials')
          }

          if (!user.isActivated) {
            console.log('Account is not activated')
            throw new Error('Account is not activated')
          }

          const isPasswordValid = await validatePassword(
            credentials.password,
            user.password
          )

          console.log('bla bla: ', isPasswordValid)
          if (!isPasswordValid) throw new Error('Incorrect email or password')

          const { password, ...userWithoutPassword } = parsedUser
          console.log('pre pre', userWithoutPassword)
          return userWithoutPassword
        } catch (error) {
          // console.log(error)
          return null
        }
      },
    }),
  ],
})

// export const { handlers, auth, signOut, signIn } = NextAuth(config)
