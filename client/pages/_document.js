

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/static/pwa.png" type="image/gif" sizes="16x16"/>
          <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lato:ital,wght@0,400;1,300&display=swap" rel="stylesheet"/>
          <link href="/static/style.css" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
