import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Filar AI - Automatyzacja dla Biznesu",
  description: "Zaoszczędź czas i zwiększ zyski dzięki inteligentnym systemom automatyzacji.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#D93025] selection:text-white dark:bg-[#080808] dark:text-[#F0EFEE] transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

