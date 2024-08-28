import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
      <>
        <Head>
          <title>David Crimi | Software Developer</title>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="description" content="David Crimi | Software Developer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="David Crimi | Software Developer" />
          <meta name="description" content="Hey! I'm David Crimi." />

          <meta property="og:title" content="David Crimi | Software Developer" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://deverajc.com/" />
          <meta property="og:image" content="https://deverajc.com/screenshot.png" />
          <meta property="og:description" content="Hey! I'm John Carlo Devera, and I'm a Bachelor of Science in Information Technology graduate." />

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@jc_devz"/>
          <meta name="twitter:title" content="John Carlo Devera | Frontend Developer"/>
          <meta name="twitter:description" content="Hey! I'm John Carlo Devera, and I'm a Bachelor of Science in Information Technology graduate."/>
          <meta name="twitter:creator" content="@jc_devz"/>
          <meta name="twitter:image" content="https://deverajc.com/screenshot.png"/>

        </Head>
        <Home />
      </>
  );
}
