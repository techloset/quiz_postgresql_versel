// // import User from "@/models/user";
// import prisma from "@/lib/prisma";
// import NextAuth from "next-auth/next";
// import GoogleProvider from 'next-auth/providers/google';

// const authOptions = {
//     providers:[
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//         })
//     ],
//     callbacks:{
//         async signIn({user, account}){
//             // save data in mongodb
//             if(account.provider === "google"){
//                 const {name, email,} = user;
//                 try {
//                    const userExists = await prisma.user.findUnique({email})
//                    if(!userExists){
//                        const res = await fetch('/api/user',{
//                            method:'POST',
//                            headers:{
//                                "Content-Type":"application/json"
//                            },
//                            body: JSON.stringify({
//                               name,
//                               email,
                              
//                            })
//                        })
//                        if(res.ok){
//                            return user
//                        }
//                    }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             return user;
//         }
//     }
// }

// const handler = NextAuth(authOptions)
// export {handler as GET, handler as POST}

// ====================================================================================


import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
