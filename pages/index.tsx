import { Paper, Grid, TextField, Button } from '@material-ui/core'

const Home = (): JSX.Element => {
  // const handleSubmit = (): void => {
  // make an api request for an http://localhost:3000/api/login endpoint
  // body request example { username: 'test', password: 'test }
  // please, display server errors somewhere
  // username 'ddi' will return token, otherwise -- error message
  // }

  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Paper style={{ padding: 30 }}>
        <Grid container>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="username" label="Username" type="text" fullWidth autoFocus required />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item md={true} sm={true} xs={true}>
              <TextField id="password" label="Password" type="password" fullWidth required />
            </Grid>
          </Grid>
          <Grid container justify="center" style={{ marginTop: '10px' }}>
            <Button type="submit" variant="outlined" color="primary" style={{ textTransform: 'none' }}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Home
