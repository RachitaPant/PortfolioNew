import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rachita's Portfolio",
  description: "A notebook-style portfolio showcasing my career journey.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap"
          rel="stylesheet"
        />
        <link rel="favicon" />
      </head>
      <body
        className={`${inter.className} bg-[url('/paper-texture.jpg')] bg-repeat bg-cover bg-center w-full`}
      >
        {children}
      </body>
    </html>
  );
}
