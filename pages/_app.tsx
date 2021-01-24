import { ThemeProvider } from "next-themes";
import { LanguagesContextProvider } from "../context/LanguagesContext";

import "../styles/tailwind.css";
import "../styles/custom.css";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <LanguagesContextProvider>
        <Component {...pageProps} />
      </LanguagesContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
