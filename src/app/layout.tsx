// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import '../app/styles/globals.scss';
import './globals.css';
import CustomHead from "@/app/components/Head";

export const metadata = {
  title: "Sales Dashboard",
  description: "Seu painel de vendas!",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomHead />
        {children}
      </body>
    </html>
  );
}
