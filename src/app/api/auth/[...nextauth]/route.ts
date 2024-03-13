import NextAuth from 'next-auth'
import CredentialsProvider  from 'next-auth/providers/credentials'
// import {compare} from 'bcrypt'
import connectMongoDB from '@/helpers/mongodb'
import User from '@/models/userModel'
//import Admin from '@/models/adminModel'

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    // pages: {
    //     signIn: "/",
    // },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials, req) {
                await connectMongoDB();
                const user = await User.findOne({ email: credentials?.email });
                // const admin = await Admin.findOne({email: credentials?.email})
                // const passwordCorrect = await compare(credentials?.password, user.password)
                // console.log(credentials?.password === user.password)
                if(credentials?.password === user.password){
                    return {
                        id: user.id,
                        email: user.email,
                    }
                }
                // } else if(credentials?.password === admin.password){
                //     return {
                //         id: user.id,
                //         email: user.email,
                //     }
                // } 
                
                return null;
        
            },
        }),
    ],
})

export { handler as GET, handler as POST };