import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  accessToken: string;
}

interface JWT {
  accessToken?: string;
  [key: string]: any; // لحفظ أي خصائص إضافية قد تُضاف إلى الـ token
}

interface Session {
  accessToken?: string;
  [key: string]: any; // لحفظ أي خصائص إضافية قد تُضاف إلى الـ session
}

export const nextauthOption: NextAuthOptions = {
  // session: {
  //   jwt: true,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  providers: [
    // CredentialsProvider({
    //   async authorize(credentials: Credentials): Promise<User | null> {
    //     try {
    //       const response = await axios.post(`http://localhost:5000/auth/login`, {
    //         email: credentials.email,
    //         password: credentials.password,
    //       });

    //       if (response.status === 200) {
    //         const user: User = {
    //           email: credentials.email,
    //           accessToken: response.data.accessToken,
    //         };
    //         return user;
    //       } else {
    //         return null;
    //       }
    //     } catch (err) {
    //       // Handle the error appropriately (e.g., logging or returning null)
    //       console.error("Error during authentication", err);
    //       return null;
    //     }
    //   },
    // }),
  ],
  // callbacks: {
  //   async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
  //     if (user) {
  //       token.accessToken = user.accessToken;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
};




// import axios from "axios";
// import CredentialsProvider from "next-auth/providers/credentials";
// export const nextauthOption : any ={
    
//         session: {
//           jwt: true,
//           maxAge: 30 * 24 * 60 * 60,
//         },
//         providers: [
//           CredentialsProvider({
//             // name: 'Credentials',
//             // credentials: {
//             //   username: { label: "email", type: "text", placeholder: "jsmith" },
//             //   password: { label: "Password", type: "password" }
//             // },
        
//             async authorize(credentials:any)   {
//               try {
//                 const response = await axios.post(`http://localhost:5000/auth/login`, {
//                   email: credentials.email,
//                   password: credentials.password,
//                 });
                
//                 if (response.status === 200) {
//                   const user = {
//                     email: credentials.email,
//                     accessToken: response.data.accessToken,
//                   };
//                   return user;
//                 } else {

//                   return null;
//                 }
//               } catch (err:any) {
//               }
//             },
        
//           }),
//         ],
        
//         callbacks: {
//           async jwt({ token, user }:any) {
//             if (user) {
//               token.accessToken = user.accessToken;
//             }
//             return token;
//           },
//           async session({ session, token, user }:any) {
//             session.accessToken = token.accessToken;
//             return session;
//           },
//         },
      
// }
