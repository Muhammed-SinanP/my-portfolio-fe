import type { Metadata } from "next";
import "./globals.css";
import { exo_2, ovo, gemunu_Libre } from "@/lib/font";
import { ReduxProvider } from "../redux/provider";
import { Toaster } from "react-hot-toast";
import ThemeCheck from "@/components/ThemeCheck";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

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
        className={`${exo_2.variable} ${ovo.variable} ${gemunu_Libre.variable} `}
      >
        <Toaster position="top-center" />

        <ReduxProvider>
          <ThemeCheck />
          <div className="absolute inset-0 -z-10">
            <ParticlesBackground />
          </div>
          <div className="bg-teal-50/10 dark:bg-base-100/10 relative">
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
