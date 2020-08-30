import DummyTable from '../components/DummyTable'
import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Table = (): JSX.Element => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      router.replace('/').then()
    }
  }, [])

  return (
    <Grid container spacing={0} alignItems="center" justify="center">
      <DummyTable />
    </Grid>
  )
}

export default Table
