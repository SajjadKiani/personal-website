import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({ subsets: ['latin', 'arabic'] })

export const metadata = {
  title: "Sajad Kiyani | Blog",
  description: "Personal Website",
};

export default function Layout({ children }) {
  return (
    <main className={vazirmatn.className}>
      {children}
    </main>
  );
}
