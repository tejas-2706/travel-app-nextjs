import db from "../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt';
export const autthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: {label: "Name", type:"text", placeholder: "John"},
                email: {label: "Email", type: "email", placeholder: "xyz@email.com"},
                password: {label: "Password", type: "password", placeholder: "123"}
            },
            async authorize(credentials : any) {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await db.user.findFirst({
                    where:{email: credentials.email}
                });
                
                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password);
                    if (passwordValidation){
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }

                try {
                    const user = db.user.create({
                        data: {
                            name: credentials.name,
                            email: credentials.email,
                            password: hashedPassword
                        }
                    });
                    return {
                        id: (await user).id.toString(),
                        name: (await user).name,
                        email: (await user).email
                    }
                } catch(e) {
                    console.log(e);
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || ""
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        async signIn({ user }: any) {

            const existingUser = await db.user.findFirst({
                where: { email: user.email }
            });

            if (!existingUser) {
                try {
                    await db.user.create({
                        data: {
                            name: user.name,
                            email: user.email,
                            password: ""
                        }
                    });
                } catch (error) {
                    console.error("Error creating user:", error);
                    return false; 
                }
            }

            return true; 
        },


        async session({token,session}: any){
            session.user.id = token.sub
            return session
        },
        
        async redirect() {
            return '/dashboard'
        }
    }
}