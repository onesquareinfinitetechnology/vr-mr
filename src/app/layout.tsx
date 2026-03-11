
import "./globals.css";

export const metadata = {
  title: "OSIT | VR Labs",
  description: "Next-Generation VR Solutions for Business and Industry",
  icons: {
    icon: "/images/logoV2_vrlabs.png",
    shortcut: "/images/logoV2_vrlabs.png",
    apple: "/images/logoV2_vrlabs.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
