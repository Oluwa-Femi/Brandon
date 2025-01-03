import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "BrandOn",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}