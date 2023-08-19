import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drizzle And Neon CRUD App",
  description: "Drizzle And Neon CRUD App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-900 text-slate-200`}
      >
        {children}
      </body>
    </html>
  )
};