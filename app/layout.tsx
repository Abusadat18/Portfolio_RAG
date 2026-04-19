import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Abu Sadat Ansari — Portfolio",
  description:
    "Full Stack Developer & AI Engineer. Ask my AI assistant anything about my skills, projects, and experience.",
  icons: {
    icon: "/icons/code-fav.png",
  },
  openGraph: {
    title: "Abu Sadat Ansari — Portfolio",
    description: "Interactive RAG-powered portfolio. Ask me anything.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
