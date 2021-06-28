import React, { useEffect, useState } from 'react'
import {
  Row,
  Grid,
  Input,
  Text,
  Select,
  Spacer,
  Spinner
} from '@geist-ui/react'
import * as Icon from '@geist-ui/react-icons'
import Layout from '../components/Layout'
import Alumni from '../components/Alumni'
import Intro from '../components/Intro'
import { GetServerSideProps } from 'next'
import { Student } from '../types'
import { getToken } from '../lib/storage'

interface Props {
  data: Student[]
}

export default function Home({ data }: Props): JSX.Element {
  const [alumnies] = useState<typeof data>(data)
  const [filteredAlumnies, setFilteredAlumnies] = useState<typeof data | []>([])
  const [search, setSearch] = useState<string>('')
  const [gender, setGender] = useState<string | string[]>('')
  const [loading, setLoading] = useState<boolean>(
    filteredAlumnies.length === 0 && !search
  )
  const [dive, setDive] = useState<boolean>(getToken() ? true : false)

  useEffect(() => {
    setFilteredAlumnies(
      alumnies.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(search.toLowerCase()) &&
          alumni.gender
            .toLowerCase()
            .split(' ')
            .join('')
            .includes(gender.toString().toLowerCase())
      )
    )
  }, [search, gender, alumnies])

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => {
      clearTimeout(timeout)
    }
  }, [gender])

  return (
    <Layout>
      {!dive ? (
        <Intro
          handleDive={() => {
            localStorage.setItem('token', 'dived in')
            setDive(true)
          }}
        />
      ) : (
        <section>
          <Row style={{ marginBottom: '1rem' }}>
            <Input
              iconRight={<Icon.Search />}
              placeholder="Cari Alumni, e.g John"
              width="100%"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearch(e.target.value)
              }
            />
            <Spacer />
            <Select
              placeholder="Jenis Kelamin"
              defaultValue={gender}
              onChange={(value: string | string[]) => setGender(value)}>
              <Select.Option value="">Semua</Select.Option>
              <Select.Option value="laki-laki">Laki-laki</Select.Option>
              <Select.Option value="perempuan">Prempuan</Select.Option>
            </Select>
          </Row>
          <Grid.Container gap={2} justify="center">
            {loading ? (
              <Grid style={{ display: 'flex', alignItems: 'center' }}>
                <Spinner />
                <Text style={{ marginLeft: '0.5rem' }}>
                  Sedang memuat data...
                </Text>
              </Grid>
            ) : (
              filteredAlumnies.map((data, index) => {
                return (
                  <Grid key={index} xs={24} sm={12} md={8}>
                    <Alumni alumni={data} />
                  </Grid>
                )
              })
            )}
            {!loading && filteredAlumnies.length === 0 && (
              <Grid style={{ display: 'flex', alignItems: 'center' }}>
                <Icon.AlertTriangle />
                <Text style={{ marginLeft: '0.5rem' }}>
                  Alumni tidak ditemukan
                </Text>
              </Grid>
            )}
          </Grid.Container>
        </section>
      )}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let protocol = 'http://'
  if(process.env.NODE_ENV === 'production') {
    protocol = 'https://'
  }
  const res = await fetch(protocol + process.env.NEXT_PUBLIC_VERCEL_URL + '/api/alumnies')
  const data: Student[] = await res.json()

  return {
    props: {
      data
    }
  }
}
