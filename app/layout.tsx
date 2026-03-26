import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "SonicArchitect | AI Voice Agent Platform",
  description: "Transform customer conversations with AI voice agents. Automate 10,000+ calls simultaneously. Reduce costs by 60%.",
  keywords: ["AI voice agent", "conversational AI", "voice automation", "customer service AI"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-primary-fixed selection:text-on-primary-fixed-variant">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}