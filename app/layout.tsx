import "./[lang]/ui/globals.css";


export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
        {children}
    </html>
  );
}