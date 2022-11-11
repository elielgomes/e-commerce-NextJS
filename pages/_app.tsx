import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ModalCartProvider from "../src/context/modalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalCartProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ModalCartProvider>
    </>
  );
}
