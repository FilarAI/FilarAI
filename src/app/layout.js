import { Playfair_Display, Inter } from "next/font/google";
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
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased selection:bg-[#FF1B6D] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
