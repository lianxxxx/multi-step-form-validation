import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Multi Step Form Data",
  description: "Next.js Multi Step Form Data Application",
  icons: [
    { url: "/icon.png", type: "image/png" }, // main icon
    { url: "/icon2.png", type: "image/png" }, // fallback
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} antialiased`}>{children}</body>
    </html>
  );
}
