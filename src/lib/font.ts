import { Exo_2, Ovo, Gemunu_Libre } from "next/font/google";

export const exo_2 = Exo_2({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const ovo = Ovo({
  variable: "--font-brand-text",
  subsets: ["latin"],
  weight: "400"
});

export const gemunu_Libre = Gemunu_Libre({
  variable: "--font-brand-title",
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});
