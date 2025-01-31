
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const nextauthOption : any ={
    
        session: {
          jwt: true,
          maxAge: 30 * 24 * 60 * 60,
        },
        providers: [
          CredentialsProvider({
            // name: 'Credentials',
            // credentials: {
            //   username: { label: "email", type: "text", placeholder: "jsmith" },
            //   password: { label: "Password", type: "password" }
            // },
        
            async authorize(credentials:any)   {
              try {
                const response = await axios.post(`http://localhost:5000/auth/login`, {
                  email: credentials.email,
                  password: credentials.password,
                });
                
                console.log("res ",response);
                if (response.status === 200) {
                  const user = {
                    email: credentials.email,
                    accessToken: response.data.accessToken,
                  };
                  console.log("user ",user);
                  return user;
                } else {

                  return null;
                }
              } catch (err:any) {
                console.log("err response",err.response);
              }
            },
        
          }),
        ],
        
        callbacks: {
          async jwt({ token, user }:any) {
            if (user) {
              token.accessToken = user.accessToken;
            }
            return token;
          },
          async session({ session, token, user }:any) {
            session.accessToken = token.accessToken;
            return session;
          },
        },
      
}
