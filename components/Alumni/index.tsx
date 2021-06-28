import React from 'react'
import { Card, User, Badge, Link, Tooltip, Avatar } from '@geist-ui/react'
import * as Icon from '@geist-ui/react-icons'
import { Student } from '../../types'

interface Props {
  alumni: Student
}

const formatName = (name: string): string => {
  return name
    .split(' ')
    .slice(0, 3)
    .map((name) => name[0].toUpperCase() + name.substring(1).toLowerCase())
    .join(' ')
}

export default function Alumni({ alumni }: Props): JSX.Element {
  const setSocialIcon = (social: string): JSX.Element => {
    return social === 'facebook' ? (
      <Icon.Facebook color="blue" />
    ) : social === 'instagram' ? (
      <Icon.Instagram color="purple" />
    ) : social === 'youtube' ? (
      <Icon.Youtube color="red" />
    ) : (
      <Icon.Github />
    )
  }

  return (
    <Card
      hoverable
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTop: `3px solid ${
          alumni.gender.toLowerCase() === 'perempuan' ? 'pink' : 'purple'
        }`
      }}>
      <Card.Content
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Tooltip
          text={
            <Avatar
              src={alumni.avatar || ''}
              text={alumni.name}
              size="medium"
            />
          }>
          <User
            style={{ padding: 0 }}
            src={alumni.avatar || ''}
            text={alumni.name}
            name={formatName(alumni.name)}>
            {alumni.city}
          </User>
        </Tooltip>
        <Tooltip text="NIM">
          <Badge>{alumni.nim}</Badge>
        </Tooltip>
      </Card.Content>
      {alumni.socials && (
        <Card.Footer
          style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {alumni.socials.map((social, index) => {
            return (
              <Link href={social.url} target="_blank" key={index}>
                {setSocialIcon(social.name.toLowerCase())}
              </Link>
            )
          })}
        </Card.Footer>
      )}
    </Card>
  )
}
