import type { Metadata } from "next";
import { Red_Hat_Display, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clior App",
  description: "Gerencie seus clientes e gere orçamentos personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body
        className={`${redHatDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
