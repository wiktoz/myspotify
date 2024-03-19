import NextAuth from "next-auth/next"
import SpotifyProvider from "next-auth/providers/spotify"
import {JWT} from "next-auth/jwt";
import {AuthOptions} from "next-auth";

export const authOptions:AuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID || "",
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
            authorization: "https://accounts.spotify.com/authorize?show_dialog=true&scope="+process.env.SPOTIFY_SCOPE,
        })
    ],
    callbacks: {
        async jwt({token, account, user}) {
          if (account && user) {
            token.accessToken = account.refresh_token;
            token.user = user
          }
          return token;
        },
        async session({session, token}:{session:any, token:JWT}) {
            session.accessToken = token.accessToken
            return session
        },
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }