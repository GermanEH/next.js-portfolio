import {inter} from "@/[lang]/ui/fonts";
import Header from './components/Header'
import HeroText from "./components/HeroText";

export default async function MainLayout({
  children, params
}: {
  children: React.ReactNode
  params: {lang: string}
}) {
  const dictionary = await import(`@/dictionaries/${params.lang}.json`).then(m => m.default)

  return (
  <html>
    <body className={`${inter.className} antialiased`}>
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
        <Header CV={dictionary.CV}/>
        <HeroText title_1={dictionary.title_1} title_2={dictionary.title_2}/>
    {children}
      </main>
      
      </body>
    </html>
    )
}