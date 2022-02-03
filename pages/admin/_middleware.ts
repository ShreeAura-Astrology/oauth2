import { withAuth } from "next-auth/middleware";

// Only logged-in users with the "admin" role will be able to see this page.
// More on how NextAuth middleware works: https://docs-git-misc-docs-nextauthjs.vercel.app/configuration/nextjs
export default withAuth({
  callbacks: {
    authorized: ({ token }) => token?.userRole === "admin",
  },
});
