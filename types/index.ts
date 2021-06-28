export type SocialName =
  | 'Facebook'
  | 'Instagram'
  | 'Youtube'
  | 'Github'
  | 'LinkedIn'

export type Social = {
  name: SocialName
  url: string
}

export type Student = {
  nim: number
  name: string
  gender: string
  city: string | 'Bangkalan, Jawa Timur'
  avatar: string | null
  socials: Social[] | null
}
