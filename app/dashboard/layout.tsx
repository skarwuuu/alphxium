import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | alphXium",
  description: "Dashboard for the Lending and Borrowing DeFi built on alephium technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
