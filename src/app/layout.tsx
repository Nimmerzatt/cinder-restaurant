import type { Metadata } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/inter-tight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cinder | Restaurant & Bar, Heidelberg",
  description:
    "Regional produce cooked over open fire. Six-course tasting menu and à la carte in Heidelberg's old town.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        {/* Flag JS early so scroll-reveal styles only hide content when they can also show it again */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
