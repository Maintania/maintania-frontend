import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import type { Account, AuthOptions } from "next-auth"
 
type GitHubProfile = {
    login?: string
  }

export const authOptions:AuthOptions = {
    session: {
        strategy: "jwt"
      },
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!,

            authorization: {
                params: {
                  scope: "read:user repo"
                }
              }
        })
    ],

    callbacks :{
        async jwt({token, account,profile}) {
            const gh = profile as GitHubProfile
            if (account?.access_token) {
                token.accessToken = account.access_token
              }
              if (profile) {
                token.username = gh.login
              }
            return token
        },
        async session({ session, token }) {
            session.accessToken = token.accessToken as string
            session.user.username = token.username
            return session
          }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }