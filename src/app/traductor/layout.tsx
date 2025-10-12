import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { SidebarProvider,SidebarTrigger } from "@/components/ui/sidebar";
import SidebarComponent from "@/components/navbar/SidebarComponent";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexify",
  description: "Tu traductor inteligente",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           
                <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <SidebarProvider>
                        <SidebarComponent/>
                        <SidebarTrigger/>
                        {children}
                    </SidebarProvider>
                </body>
            
    </html>
  );
}
