import React from 'react'
import { Grid, Text, Button, Spacer } from '@geist-ui/react'
import * as Icon from '@geist-ui/react-icons'

interface Props {
  handleDive: () => void
}

export default function Intro({ handleDive }: Props): JSX.Element {
  return (
    <Grid
      xs={24}
      sm={12}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto'
      }}>
      <Text h1 style={{ textAlign: 'center' }} size="40px">
        Imagine Squad 2016 <Text span>Informatics Engineering</Text>
      </Text>
      <Spacer />
      <Button
        onClick={handleDive}
        type="secondary"
        auto
        icon={<Icon.Settings />}>
        Dive In
      </Button>
    </Grid>
  )
}
