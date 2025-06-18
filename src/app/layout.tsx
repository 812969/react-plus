import "./globals.css";
import {ReactElement} from "react";

interface RootLayoutProps {
  children: Readonly<ReactElement>;
}

import {Orbitron} from 'next/font/google'

const orbitron = Orbitron({
  subsets: ['latin'],
});

export default function RootLayout({ children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        {children}
      </body>
    </html>
  );
}
