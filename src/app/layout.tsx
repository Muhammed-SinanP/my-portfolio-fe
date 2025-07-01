import type { Metadata } from "next";
import "./globals.css";
import { exo_2, ovo, gemunu_Libre } from "@/lib/font";
import { ReduxProvider } from "../redux/provider";
import { Toaster } from "react-hot-toast";
import ThemeCheck from "@/components/ThemeCheck";

export const metadata: Metadata = {
  title: "Portfolio - Muhammed Sinan P",
  description: "Full Stack Developer skilled in MERN stack.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${exo_2.variable} ${ovo.variable} ${gemunu_Libre.variable} bg-[#f9fffe] dark:bg-base-100`}
      >
        <Toaster position="top-center" />

        <ReduxProvider>
          <ThemeCheck />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
