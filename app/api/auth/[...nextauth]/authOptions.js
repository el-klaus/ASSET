import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    
    providers: [
        
         GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
             clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        EmailProvider({
            server: process.env.EMAIL_SERVER, // e.g., SMTP credentials
            from: process.env.EMAIL_FROM, // Sender email address
          }),
    ],
     pages:{
         signIn: "/auth/signin"
     }
}