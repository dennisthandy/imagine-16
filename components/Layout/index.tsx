import React, { PropsWithChildren } from 'react'
import Head from 'next/head'
import { Page } from '@geist-ui/react'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout<T>(props: PropsWithChildren<T>): JSX.Element {
  const { children } = props

  return (
    <>
      <Head>
        <title>Imagine 16</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content="utm, madura, teknik informatika, informatika, alumni"
        />
      </Head>
      <Page size="large">
        <Page.Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.25rem 0'
          }}>
          <Header />
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>
          <Footer />
        </Page.Footer>
      </Page>
    </>
  )
}
