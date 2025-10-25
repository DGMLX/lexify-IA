import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@correo.com" },
        password: { label: "Contraseña", type: "password", placeholder: "*******" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const userFound = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!userFound) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        if (!passwordMatch) return null;

        // ✅ Aseguramos devolver el ID como string
        const user = {
          id: userFound.id.toString(),
          name: userFound.nombre,
          email: userFound.email,
        };

        console.log("✅ authorize user:", user);
        return user;
      },
    }),
  ],

  pages: { signIn: "/" },

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      // Se ejecuta en cada request, user solo existe al iniciar sesión
      if (user) {
        console.log("🧩 JWT callback - user.id:", user.id);
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      console.log("📦 SESSION callback - token.id:", token.id);
      if (session.user && token.id) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
};
 
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
