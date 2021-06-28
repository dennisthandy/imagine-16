import React from 'react'
import * as Icon from '@geist-ui/react-icons'
import { Grid, Link, Avatar, Text } from '@geist-ui/react'
import NextLink from 'next/link'

export default function Header(): JSX.Element {
  return (
    <>
      <Grid>
        <NextLink href="/">
          <Link style={{display: 'flex', alignItems:'center'}}>
            <Avatar
              src="/android-chrome-192x192.png"
              text="IMAGINE16"
              alt="IMAGINE16"
              size="small"
            />
            <Text style={{marginLeft: '0.5rem'}}>Imagine 16</Text>
          </Link>
        </NextLink>
      </Grid>
      <Grid>
        <Link target="_blank" href="https://github.com/dennisthandy/imagine-16">
          <Icon.Github />
        </Link>
      </Grid>
    </>
  )
}
