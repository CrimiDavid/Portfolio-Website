import Head from 'next/head'
import { Home } from '@/components/home/Home'

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
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Hey! I', David Crimi and I am a software developer"
        />
      </Head>
      <Home />
    </>
  )
}
