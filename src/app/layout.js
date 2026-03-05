import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "Filar AI - Automatyzacja dla Biznesu",
  description: "Zaoszczędź czas i zwiększ zyski dzięki inteligentnym systemom automatyzacji.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
