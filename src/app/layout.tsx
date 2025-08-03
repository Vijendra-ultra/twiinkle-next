import UserSessionGetter from "@/miniComps/UserSessionGetter";
import "./globals.css";
import ProfileWindowHolder from "@/miniComps/ProfileWindowHolder";
import ThemeGetter from "@/miniComps/ThemeGetter";
import ToastProvider from "@/miniComps/ToastProider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        /> */}
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
           (function() {
        try {
          const mode = localStorage.getItem("mode");
          if (mode === "dark") {
            document.documentElement.classList.add("dark");
          }
        } catch(e) {}
      })();
    `,
          }}
        ></script>
      </head>

      <body>
        <UserSessionGetter />
        <ProfileWindowHolder />
        <ThemeGetter />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
