import UserSessionGetter from "@/miniComps/UserSessionGetter";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserSessionGetter />
      <body>{children}</body>
    </html>
  );
}
