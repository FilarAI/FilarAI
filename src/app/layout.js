import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
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
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-[#FF1B6D] selection:text-white dark:bg-[#0A0A0A] dark:text-[#FFFFFF] transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

