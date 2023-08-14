import NextAuth from "next-auth";
const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [],
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/auth/login",
  },
  debug: process.env.NODE_ENV === "development",
});

export { handler as GET, handler as POST };
