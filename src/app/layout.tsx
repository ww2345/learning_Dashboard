import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Dashboard",
  description: "Next.js + Supabase Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
