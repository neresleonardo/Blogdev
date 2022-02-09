import Document, {Html,Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
      <Html lang="en">
      <Head>
        <meta />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:ital,wght@0,400;1,600&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
          <Main />
          <NextScript />
      </body>
      </Html>
    )
  }
}