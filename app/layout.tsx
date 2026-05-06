import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "Real-time collaborative system design workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#00c8d4",
          colorBackground: "#111114",
          colorInputBackground: "#18181c",
          colorInputText: "#f0f0f4",
          colorText: "#f0f0f4",
          colorTextSecondary: "#808090",
          borderRadius: "0.75rem",
          fontFamily: "var(--font-sans)",
        },
        elements: {
          card: "bg-[#111114] border border-[#2a2a30] shadow-2xl",
          formButtonPrimary: "bg-[#00c8d4] hover:bg-[#00b0ba] text-black font-bold py-3 transition-all",
          socialButtonsBlockButton: "bg-[#18181c] border border-[#2a2a30] hover:bg-[#1e1e23] text-text-primary transition-all",
          formFieldInput: "bg-[#18181c] border-[#2a2a30] focus:border-[#00c8d4] transition-all",
          footerActionLink: "text-[#00c8d4] hover:text-[#00b0ba]",
          headerTitle: "text-2xl font-bold tracking-tight text-text-primary",
          headerSubtitle: "text-text-muted",
        }
      }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
