import { Inter, Roboto, Vazirmatn } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const roboto = Inter({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({subsets: ['arabic']});

export const metadata = {
  title: "Sajad Kiyani",
  description: "Sajad Kiyani, Frontend developer, personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content={process.env.NODE_ENV === 'production' ? 'https://personal-website-indol-sigma.vercel.app/api/og' : 'http://localhost:3000/api/og' }
        />
        <meta property="og:site_name" content="Sajad kiyani" />
        <meta property="og:title" content="Sajad kiyani" />
        <meta property="og:description" content="Sajad Kiyani, Frontend developer, personal website" />
        <meta property="twitter:image" content={process.env.NODE_ENV === 'production' ? 'https://personal-website-indol-sigma.vercel.app/api/og' : 'http://localhost:3000/api/og' } />
        <meta property="twitter:title" content="Sajad kiyani" />
        <meta property="twitter:description" content="Sajad Kiyani, Frontend developer, personal website" />
      </head>
      <body className={roboto.className + " " + vazirmatn.className}>
        <Analytics />
        <SpeedInsights />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
