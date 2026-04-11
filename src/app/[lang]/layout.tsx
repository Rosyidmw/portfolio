import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/dictionaries";
import { locales } from "@/middleware";
import { ThemeInitScript } from "@/components/ThemeInitScript";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rotibowifdev.my.id"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "id": "/id",
    },
  },
  title: {
    default: "Rosyid Mukti Wibowo | Mobile Developer Portfolio",
    template: "%s | Rosyid Mukti Wibowo",
  },
  description: "Portfolio of Rosyid Mukti Wibowo, a Mobile Developer specializing in Flutter, Android Native, and iOS development.",
  keywords: ["Mobile Developer", "Flutter Developer", "Android Developer", "Rosyid Mukti Wibowo", "Software Engineer", "Frontend Developer", "Portfolio", "Jetpack Compose"],
  authors: [{ name: "Rosyid Mukti Wibowo", url: "https://github.com/Rosyidmw" }],
  creator: "Rosyid Mukti Wibowo",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: "https://github.com/Rosyidmw",
    title: "Rosyid Mukti Wibowo | Mobile Developer",
    description: "Explore my mobile development portfolio, featured projects, and software engineering experience.",
    siteName: "Rosyid Mukti Wibowo Portfolio",
    images: [{
      url: "/icon_web.JPG",
      width: 800,
      height: 800,
      alt: "Rosyid Mukti Wibowo Profile Photo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosyid Mukti Wibowo | Mobile Developer",
    description: "Explore my mobile development portfolio, featured projects, and software engineering experience.",
    images: ["/icon_web.JPG"],
  },
  icons: {
    icon: "/icon_web.JPG",
    apple: "/icon_web.JPG",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }>
) {
  const params = await props.params;
  const lang = (params.lang as "en" | "id") || "en";
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${plusJakartaSans.className} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <ThemeInitScript />
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <Navbar dict={dict.navbar} currentLang={lang} />
        <main className="flex-1 flex flex-col">{props.children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
