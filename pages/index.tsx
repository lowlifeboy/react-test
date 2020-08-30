import { Paper, Grid, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { useRouter } from 'next/router'

const Home = (): JSX.Element => {
  // const handleSubmit = (): void => {
  // make an api request for an http://localhost:3000/api/login endpoint
  // body request example { username: 'test', password: 'test }
  // please, display server errors somewhere
  // username 'ddi' will return token, otherwise -- error message
  // }
  const [loginError, setLoginError] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = (): void => {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message)
          localStorage.setItem('err', data.error)
        }
        if (data && data.token) {
          localStorage.setItem('token', data.token)

          router.replace('/table').then()
        }
      })
  }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Paper style={{ padding: 30 }}>
        <Grid container>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="username"
                label="Username"
                type="text"
                fullWidth
                autoFocus
                required
                value={username}
                onChange={(event) => setUserName(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              style={{ textTransform: 'none' }}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <p>{loginError}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Home
