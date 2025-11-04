import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Twitter clone",
  description: "Clon de Twitter (X) programado con NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="app-layout">
          <div className="main-content-area">
            <div className="sidebar">
              <Sidebar />
            </div>
            <main className="main-content">
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
