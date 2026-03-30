import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travis M. Kirby — Digital Forensics & eDiscovery",
  description: "Paralegal candidate specializing in eDiscovery and digital forensics.",
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