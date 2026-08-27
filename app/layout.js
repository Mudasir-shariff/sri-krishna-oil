import "./globals.css";
import { CartProvider } from "../components/CartContext";

export const metadata = {
  title: "Sri Raksha Oil Mill — Wood Pressed Edible Oils",
  description: "Sri Raksha Oil Mill — wood pressed groundnut, coconut, gingelly, sunflower and safflower oil. Pure virgin natural oil, freshly pressed in Electronic City, Bengaluru.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,450;9..144,560;9..144,650&family=Work+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
