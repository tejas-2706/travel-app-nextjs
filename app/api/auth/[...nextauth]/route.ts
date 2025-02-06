import NextAuth from "next-auth";
import { autthOptions } from "../../../lib/auth";

const handler = NextAuth(autthOptions);

export {handler as GET, handler as POST}