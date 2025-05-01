import { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const font = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "project ecom",
  description: "project ecom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased ${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
