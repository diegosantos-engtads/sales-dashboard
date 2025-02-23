// app/layout.tsx
import '../app/styles/globals.scss';
import './globals.css';
import CustomHead from "@/app/components/Head";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" }); // Define a variável CSS

export const metadata = {
  title: "Sales Dashboard",
  description: "Seu painel de vendas!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <main>
          <CustomHead />
          {children}
        </main>
      </body>
    </html>
  );
}
