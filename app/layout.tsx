import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Abu Sadat Ansari — Portfolio",
  description:
    "Full Stack Developer & AI Engineer. Ask my AI assistant anything about my skills, projects, and experience.",
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
        {children}
      </body>
    </html>
  );
}
