import React, { useEffect, useRef, useState } from 'react'
import { Card, User, Badge, Link, Tooltip, Avatar, Text } from '@geist-ui/react'
import * as Icon from '@geist-ui/react-icons'
import { Student } from '../../types'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/micah'
import styles from './styles.module.css'

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
  const [isHover, setIsHover] = useState(false)
  const isWomen = alumni.gender.toLowerCase() === 'perempuan'
  const nim = alumni.nim.toString().length
  const formatNim: Record<number, string> = {
    1: `00${alumni.nim}`,
    2: `0${alumni.nim}`,
    3: alumni.nim.toString()
  }
  const socialIcon: Record<string, JSX.Element> = {
    facebook: <Icon.Facebook color="blue" />,
    instagram: <Icon.Instagram color="purple" />,
    youtube: <Icon.Youtube color="red" />,
    github: <Icon.Github />
  }
  const dicebearAvatar = createAvatar(style, {
    seed: 'custom-seed',
    dataUri: true,
    hairColor: ['black'],
    baseColor: ['apricot'],
    mouth: isHover ? ['surprised'] : ['smile'],
    hair: isWomen ? ['pixie'] : ['fonze']
  })

  return (
    <Card
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      hoverable
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderTop: `3px solid ${isWomen ? 'pink' : 'purple'}`,
        position: 'relative'
      }}
      className={styles.card}>
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
            style={{
              padding: 0,
              position: 'relative'
            }}
            src={dicebearAvatar || ''}
            text={alumni.name}
            name={formatName(alumni.name)}>
            {alumni.city}
            <Text
              className={styles.animateGraduate}
              style={{
                fontSize: '1.35rem',
                position: 'absolute',
                top: -12,
                left: 0
              }}>
              🎓
            </Text>
          </User>
        </Tooltip>
        <Tooltip text={`160411100${formatNim[nim]}`}>
          <Badge>{alumni.nim}</Badge>
        </Tooltip>
      </Card.Content>
      {alumni.socials && (
        <Card.Footer
          style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          {alumni.socials.map((social, index) => {
            return (
              <Link href={social.url} target="_blank" key={index}>
                {socialIcon[social.name.toLowerCase()]}
              </Link>
            )
          })}
        </Card.Footer>
      )}
    </Card>
  )
}
