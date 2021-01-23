import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { LanguagesContextProvider } from "../context/LanguagesContext";
import "../styles/tailwind.css";
import "../styles/custom.css";

const MetaLinkHead = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>GitExplore - Trending Repositories</title>
      <link rel="manifest" href="/manifest.json" />
      <link
        href="/icons/icon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/icon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      <meta name="theme-color" content="#317EFB" />
    </Head>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LanguagesContextProvider>
        <MetaLinkHead />
        <Component {...pageProps} />
      </LanguagesContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
