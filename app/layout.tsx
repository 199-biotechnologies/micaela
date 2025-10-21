import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doran Homes Design",
  description: "The White Angel Talamanca - Heaven in the heart of Talamanca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
