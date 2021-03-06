import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import PageLayout from "../components/Templates/Layout";

import "./../styles/style.scss";
import { useRouter } from "next/router";

import "@fortawesome/fontawesome-free/js/all.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface IAppProps extends AppProps {}

const App = ({ Component, pageProps }: IAppProps) => {
  const router = useRouter();

  const pageIsFullscreen = () => {
    return router.pathname == "/";
  };

  return (
    <>
      <Head>
        <title>Babet Kanis</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="assets/fonts/fonts.css" rel="stylesheet" />
        <meta name="Babet Kanis" content="Babet Kanis portfolio website" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <div
        className={`app_pagelayout${pageIsFullscreen() ? " fullscreen" : ""}`}
      >
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </>
  );
};

export default App;
