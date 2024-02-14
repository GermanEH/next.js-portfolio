import {inter} from "@/app/ui/fonts";
import "./ui/globals.css";
import Header from './ui/Header'
import HeroText from "./ui/HeroText";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
        <Header/>
        <HeroText/>
        {children}
    </main>
      
      </body>
    </html>
  );
}
