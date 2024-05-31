import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const roboto = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sajad Kiyani",
  description: "Sajad Kiyani, Frontend developer, personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
