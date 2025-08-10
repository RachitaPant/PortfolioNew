// app/layout.jsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "A notebook-style portfolio showcasing my career journey.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-[url('/paper-texture.jpg')] bg-repeat bg-cover bg-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
