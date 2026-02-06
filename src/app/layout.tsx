import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { AppProvider } from "./providers";

export const metadata: Metadata = {
  title: "Pulse",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
