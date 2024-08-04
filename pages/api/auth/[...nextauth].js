import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import InstagramProvide from "next-auth/providers/instagram"


export const authOption = {
    providers : [
        GithubProvider({
            clientId :  "",
            clientSecret : ""
        }),
        GoogleProvider({
            clientId : "Ov23lijoIvBFGzGHtcx6",
            clientSecret : "4f0531b544bd4069a68de498e4bdce3768460457"
        }),
        InstagramProvide({
            
        })
    ]

}

export default NextAuth(authOption);