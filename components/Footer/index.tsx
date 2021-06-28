import React from 'react'
import { Text, Link } from '@geist-ui/react'

export default function Footer(): JSX.Element {
  return (
    <>
      <Text size="12px" style={{textAlign: 'center'}}>
        Made with ❤️ by{' '}
        <Link href="https://github.com/dennisthandy" target="_blank" color>
          @dennisthandy
        </Link>
      </Text>
    </>
  )
}
