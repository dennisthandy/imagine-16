import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { CssBaseline } from '@geist-ui/react'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      )
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Imagine 16" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Imagine 16" />
          <meta
            name="description"
            content="Buku Digital Alumni Imagine Squad 2016 Teknik Informatika Universitas Trunojoyo Madura"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          /> */}
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          <link rel="shortcut icon" href="/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Imagine 16" />
          <meta
            property="og:description"
            content="Buku Digital Alumni Imagine Squad 2016 Teknik Informatika Universitas Trunojoyo Madura"
          />
          <meta property="og:site_name" content="Imagine 16" />
          <meta
            property="og:url"
            content={'https://'+process.env.NEXT_PUBLIC_VERCEL_URL}
          />
          <meta
            property="og:image"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/apple-touch-icon.png`}
          />
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
