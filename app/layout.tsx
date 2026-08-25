import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cachu Park Restaurante | Campo Grande - MS",
  description:
    "Marmitas caseiras em Campo Grande - MS. Peça pelo cardápio online e retire na Vila Margarida, de segunda a sábado, das 10h às 14h.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
