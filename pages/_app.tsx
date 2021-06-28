import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistProvider } from '@geist-ui/react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GeistProvider>
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
