import GoogleProvider from "next-auth/providers/google";

const allowedEmails = [
  // "x@gmail.com", // burada yorumu kaldırıp tırnak içine izin verilen gmail adreslerini girin.
];

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // sadece belirtilen email adreslerine izin verme
      return allowedEmails.includes(user.email);
    },
    async redirect({ url, baseUrl }) {
      // giriş yapanı dashboarda yönlendirme
      return `${baseUrl}/dashboard`;
    },
  },
  secret: process.env.AUTH_SECRET,
};
