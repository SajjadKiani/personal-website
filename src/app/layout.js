import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export const metadata = {
  title: "Sajad Kiyani",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
