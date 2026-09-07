import "./globals.css";

export const metadata = {
  title: "DOTLIK IT - It's Tech Solution",
  description: "Fast, intuitive websites and mobile apps by Dotlik IT.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "DOTLIK IT - It's Tech Solution",
    description: "Fast, intuitive websites and mobile apps by Dotlik IT.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "DOTLIK IT Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
