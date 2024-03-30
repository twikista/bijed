export const authConfig = {
  providers: [],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log('jwt user: ', user)
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.isAdmin = token.isAdmin
      }
      console.log(session)
      return session
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const loggedInUser = auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      const isOnAdminPage = nextUrl.pathname.startsWith('/dashboard/admin')
      const isOnCreateUserPage = nextUrl.pathname === '/auth/signup'

      console.log(
        'loggedIn: ',
        isLoggedIn,
        'isOnDashboard: ',
        isOnDashboard,
        'onAdminPage: ',
        isOnAdminPage,
        'oncreateuser:',
        isOnCreateUserPage
      )
      // console.log('login boolean: ', !!auth?.user)
      // console.log('admin: ', loggedInUser?.isAdmin)
      // console.log('non-admin: ', !loggedInUser.isAdmin)

      // console.log('admin route: ', nextUrl.pathname === '/dashboard/admin')
      if (isOnCreateUserPage) {
        if (isLoggedIn && loggedInUser.isAdmin) return true
        if (isLoggedIn && !loggedInUser.isAdmin)
          return Response.redirect(new URL('/dashboard', nextUrl))
        return false
      }

      if (isOnAdminPage) {
        if (isLoggedIn && loggedInUser.isAdmin) return true
        if (isLoggedIn && !loggedInUser.isAdmin)
          return Response.redirect(new URL('/dashboard', nextUrl))
        return false
      }

      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }

      return true
    },
  },
}

// export const authConfig = {
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       console.log('i ran from jwt')
//       if (user) {
//         token.id = user.id
//         token.isAdmin = user.isAdmin
//       }
//       return token
//     },
//     async session({ session, token }) {
//       console.log('i ran from session')
//       if (token) {
//         session.id = token.id
//         session.isAdmin = token.isAdmin
//       }
//       return session
//     },
//     authorized({ auth, request }) {
//       console.log('from authorized')
//       // console.log(request)
//       console.log(auth?.user)
//       const user = auth?.user
//       const isOnAdminPage = request.nextUrl.pathname === '/dashboard/admin'
//       const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard')
//       const isOnLoginPage = request.nextUrl.pathname === '/login'

//       console.log(isOnAdminPage)
//       console.log(isOnDashboard)
//       console.log(isOnLoginPage)
//       if (isOnAdminPage && user && !user?.isAdmin)
//         return Response.redirect(new url('/dashboard', request.nextUrl))

//       if (isOnDashboard && !user) return false

//       if (isOnLoginPage && user)
//         return Response.redirect(new url('/dashboard', request.nextUrl))

//       return true
//     },
//   },
//   providers: [],
// }

// const config = {
//   provider: [credentialsConfig],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id
//         token.isAdmin = user.isAdmin
//       }
//       return token
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id
//         session.user.isAdmin = token.user
//       }
//       return session
//     },
//     authorized({ request, auth }) {
//       const user = auth?.user
//       const isAdminPath = request.nextUrl.pathname === '/dashboard/admin'
//       const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')
//       const isOnLoginPage = request.nextUrl.pathname === '/login'

//       if (isAdminPath && user && !user.isAdmin)
//         return redirect(new url('/dashboard', request.nextUrl))

//       if (isDashboard && !user) return false

//       if (isOnLoginPage && user)
//         redirect(new url('/dashboard', request.nextUrl))

//       return true
//     },
//   },
// }

// authConfig = {
//     name: 'credentials',
//     credentials: {},
//     page: {
//       signIn: '/login',
//     },
//     callbacks: {
//       async jwt({ token, user }) {
//         if (user) {
//           token.id = user.id
//           token.isAdmin = user.isAdmin
//         }
//         return token
//       },
//       async session({ session, token }) {
//         if (token) {
//           session.id = token.id
//           session.isAdmin = token.isAdmin
//         }
//         return session
//       },
//       authorized(auth, { request: { nextUrl } }) {
//         const user = auth?.user
//         const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
//         const isOnAdminPage = nextUrl.pathname === '/dashboard/admin'
//         const isOnLoginPage = nextUrl.pathname.startsWith('/login')

//         //only admins can reach admin panel
//         if (isOnDashboard && isOnAdminPage) {
//           if (user && !user?.isAdmin)
//             return Response.redirect('/dashboard', nextUrl) //work to redirect to dashboard home
//         }
//         //only logged in user can reach the dashboard
//         if (isOnDashboard && !isOnAdminPage) {
//           if (!user) return false
//         }

//         //only unauthenticated users can access login page.
//         //Redirect all logged in users away from login page
//         if (isOnLoginPage && user) return Response.redirect('/dashboard', nextUrl)

//         return true
//       },
//     },
//     providers: [],
//   }
