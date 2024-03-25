import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import ActiveSectionContextProvider from "@/context/active-section-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveSectionContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActiveSectionContextProvider>
  );
}
