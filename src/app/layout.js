import { Vazirmatn, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Sajad Kiyani",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas_Neue.className}>{children}</body>
    </html>
  );
}
