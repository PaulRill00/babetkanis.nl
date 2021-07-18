import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import PageLayout from "@Templates/Layout";

import "./../styles/style.scss";

interface IAppProps extends AppProps {}

const App = ({ Component, pageProps }: IAppProps) => {
  return (
    <>
      <Head>
        <title>Babet Kanis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/fonts/style.css" rel="stylesheet" />
        <meta name="Babet Kanis" content="Babet Kanis portfolio website" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>

      <div className="app_pagelayout">
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </>
  );
};

export default App;
