import {inter} from "@/[lang]/ui/fonts";
import "./ui/globals.css";
import Header from './components/Header'
import HeroText from "./components/HeroText";

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode
  params: {lang: string}
}) {
  const dictionary = await import(`@/dictionaries/${params.lang}.json`).then(m => m.default)
  
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
        <Header/>
        <HeroText title_1={dictionary.title_1} title_2={dictionary.title_2}/>
        {children}
    </main>
      
      </body>
    </html>
  );
}
