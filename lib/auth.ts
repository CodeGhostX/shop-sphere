import prisma from '@/lib/client';
const bcrypt = require("bcryptjs");
import CredentialsProvider from "next-auth/providers/credentials";
export const NEXT_AUTH_CONFIG = {
  providers:[
    CredentialsProvider({
      name:'Credentials',
      credentials:{
        username:{label:"email", type:'email', placeholder:""},
        password:{label:"password", type:'password', placeholder:""}
      },
      async authorize(credentials:any){
        const user = await prisma.user.findFirst({
          where:{
            email:credentials.username
          }
        })
        const isPasswordValid = await bcrypt.compare(credentials.password, user?.password);
        if(user && isPasswordValid){
          return user;
        }
        return null;
      },
    })
  ],
  callbacks:{
    async jwt({token, user}:any){
      if(user) token.role = user.role
      return token;
    },
    async session({session, token}:any){
      session.user.role = token.role;
      return session;
    }
  },
  pages:{
    signIn:"/signin"
  },
  secret:process.env.NEXTAUTH_SECRET
}