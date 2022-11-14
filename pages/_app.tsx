import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ModalCartProvider from "../src/context/modalContext";
import CartProvider from "../src/context/cartContext";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <ModalCartProvider>
          <CartProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </CartProvider>
        </ModalCartProvider>
      </>
    );
  }
}
