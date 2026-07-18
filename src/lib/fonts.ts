import { Inter, Space_Grotesk, Noto_Sans_Bengali, Audiowide } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const notoBengali = Noto_Sans_Bengali({
  variable: "--font-noto-bengali",
  subsets: ["bengali"],
  display: "swap",
});

export const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

export const tuskerGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/TuskerGrotesk-6500Medium-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TuskerGrotesk-6500Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TuskerGrotesk-6600Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tusker",
  display: "swap",
});
