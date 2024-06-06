import { Inter, Roboto, Vazirmatn } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const roboto = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({subsets: ['arabic']});

export const metadata = {
  title: "Sajad Kiyani",
  description: "Sajad Kiyani, Frontend developer, personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + " " + vazirmatn.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
