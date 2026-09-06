import "./globals.css";

export const metadata = {
  title: "DOTLIK IT - It's Tech Solution",
  description: "Fast, intuitive websites and mobile apps by Dotlik IT."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}