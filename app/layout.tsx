import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "10: Champions Reignited",
  description:
    "Ore Oduba and Joanne Clifton reunite in 10: Champions Reignited — a spectacular live touring show celebrating their Strictly Come Dancing victory.",
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